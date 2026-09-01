import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

const INPUT_DIR = path.join(process.cwd(), "public", "images");
const OUTPUT_DIR = path.join(process.cwd(), "public", "images-optimized");

const MIN_SIZE_KB = 100;
const MAX_WIDTH = 1920;
const WEBP_QUALITY = 80;

const supportedExtensions = [".png", ".jpg", ".jpeg"];

async function getFiles(directory) {
  const entries = await fs.readdir(directory, {
    withFileTypes: true,
  });

  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(directory, entry.name);

      if (entry.isDirectory()) {
        return getFiles(fullPath);
      }

      return fullPath;
    })
  );

  return files.flat();
}

async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function optimizeImage(filePath) {
  const extension = path.extname(filePath).toLowerCase();

  if (!supportedExtensions.includes(extension)) {
    return "unsupported";
  }

  const originalStats = await fs.stat(filePath);
  const originalSizeKB = originalStats.size / 1024;

  if (originalSizeKB <= MIN_SIZE_KB) {
    return "small";
  }

  const relativePath = path.relative(INPUT_DIR, filePath);

  const outputRelativePath = relativePath.replace(
    /\.(png|jpg|jpeg)$/i,
    ".webp"
  );

  const outputPath = path.join(
    OUTPUT_DIR,
    outputRelativePath
  );

  const optimizedExists = await fileExists(outputPath);

  if (optimizedExists) {
    const optimizedStats = await fs.stat(outputPath);

    /*
      If the optimized WebP is newer than or equal to
      the original image, nothing has changed.
    */
    if (
      optimizedStats.mtimeMs >=
      originalStats.mtimeMs
    ) {
      console.log(
        `⏭️ SKIP: ${relativePath} already optimized`
      );

      return "skipped";
    }

    console.log(
      `🔄 UPDATED SOURCE: ${relativePath}`
    );
  } else {
    console.log(`🆕 NEW: ${relativePath}`);
  }

  await fs.mkdir(path.dirname(outputPath), {
    recursive: true,
  });

  const optimizedBuffer = await sharp(filePath)
  .resize({
    width: MAX_WIDTH,
    withoutEnlargement: true,
  })
  .webp({
    quality: WEBP_QUALITY,
    effort: 6,
  })
  .toBuffer();

await fs.writeFile(
  path.toNamespacedPath(outputPath),
  optimizedBuffer
);


  const optimizedStats = await fs.stat(outputPath);
  const optimizedSizeKB =
    optimizedStats.size / 1024;

  const saving = (
    ((originalSizeKB - optimizedSizeKB) /
      originalSizeKB) *
    100
  ).toFixed(1);

  console.log(
    `✅ ${relativePath}
   ${originalSizeKB.toFixed(1)} KB → ${optimizedSizeKB.toFixed(
      1
    )} KB (${saving}% smaller)\n`
  );

  return optimizedExists
    ? "updated"
    : "optimized";
}

async function run() {
  console.log(
    "🖼️ Starting incremental image optimization...\n"
  );

  const files = await getFiles(INPUT_DIR);

  let optimized = 0;
  let updated = 0;
  let skipped = 0;
  let small = 0;
  let failed = 0;

  for (const file of files) {
    try {
      const result = await optimizeImage(file);

      if (result === "optimized") optimized++;
      if (result === "updated") updated++;
      if (result === "skipped") skipped++;
      if (result === "small") small++;
    } catch (error) {
      failed++;

      console.error(`❌ Failed: ${file}`);
      console.error(error.message);
    }
  }

  console.log("\n📊 Optimization summary");
  console.log(`🆕 New images optimized: ${optimized}`);
  console.log(`🔄 Changed images rebuilt: ${updated}`);
  console.log(`⏭️ Existing images skipped: ${skipped}`);
  console.log(`👌 Images already under 100 KB: ${small}`);
  console.log(`❌ Failed: ${failed}`);

  console.log(
    "\n✅ Image optimization completed."
  );

  console.log(
    "Original images were NOT modified."
  );
}

run();


