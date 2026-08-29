import fs from "fs/promises";
import path from "path";

const PROJECT_ROOT = process.cwd();
const SRC_DIR = path.join(PROJECT_ROOT, "src");
const OPTIMIZED_DIR = path.join(
  PROJECT_ROOT,
  "public",
  "images-optimized"
);

const DRY_RUN = false;


const allowedCodeExtensions = new Set([
  ".js",
  ".jsx",
  ".ts",
  ".tsx",
  ".mjs",
]);

async function getFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        return getFiles(fullPath);
      }

      return fullPath;
    })
  );

  return files.flat();
}

async function optimizedImageExists(imagePath) {
  const relativePath = imagePath
    .replace(/^\/images\//, "")
    .replace(/\.(png|jpg|jpeg)$/i, ".webp");

  const optimizedPath = path.join(
    OPTIMIZED_DIR,
    relativePath
  );

  try {
    await fs.access(optimizedPath);

    return {
      exists: true,
      newPath: `/images-optimized/${relativePath.replace(
        /\\/g,
        "/"
      )}`,
    };
  } catch {
    return {
      exists: false,
      newPath: null,
    };
  }
}

async function processFile(filePath) {
  const extension = path.extname(filePath).toLowerCase();

  if (!allowedCodeExtensions.has(extension)) {
    return;
  }

  const content = await fs.readFile(filePath, "utf8");

  const imageRegex =
    /\/images\/[^"'`\s)]+\.(?:png|jpg|jpeg)/gi;

  const matches = [
    ...new Set(content.match(imageRegex) || []),
  ];

  if (matches.length === 0) {
    return;
  }

  let updatedContent = content;
  let replacements = 0;

  for (const oldPath of matches) {
    const result = await optimizedImageExists(oldPath);

    if (!result.exists) {
      continue;
    }

    updatedContent = updatedContent
      .split(oldPath)
      .join(result.newPath);

    replacements++;

    console.log(`✅ ${oldPath}`);
    console.log(`   → ${result.newPath}`);
  }

  if (
    replacements > 0 &&
    updatedContent !== content
  ) {
    if (DRY_RUN) {
      console.log(
        `🧪 DRY RUN: Would update ${path.relative(
          PROJECT_ROOT,
          filePath
        )} (${replacements})\n`
      );
    } else {
      await fs.writeFile(
        filePath,
        updatedContent,
        "utf8"
      );

      console.log(
        `📝 Updated ${path.relative(
          PROJECT_ROOT,
          filePath
        )} (${replacements})\n`
      );
    }
  }
}

async function run() {
  console.log(
    "🔎 Searching for optimizable image paths...\n"
  );

  if (DRY_RUN) {
    console.log(
      "🧪 DRY RUN ENABLED — no files will be modified.\n"
    );
  }

  const files = await getFiles(SRC_DIR);

  for (const file of files) {
    try {
      await processFile(file);
    } catch (error) {
      console.error(`❌ Error processing ${file}`);
      console.error(error.message);
    }
  }

  console.log(
    "\n✅ Image path scan completed."
  );

  if (DRY_RUN) {
    console.log(
      "🧪 No source files were modified."
    );
  }
}

run();
