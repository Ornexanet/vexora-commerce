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
  const entries = await fs.readdir(directory, { withFileTypes: true });

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

async function optimizeImage(filePath) {
  const extension = path.extname(filePath).toLowerCase();

  if (!supportedExtensions.includes(extension)) {
    return;
  }

  const stats = await fs.stat(filePath);
  const originalSizeKB = stats.size / 1024;

  if (originalSizeKB <= MIN_SIZE_KB) {
    return;
  }

  const relativePath = path.relative(INPUT_DIR, filePath);

  const outputRelativePath = relativePath.replace(
    /\.(png|jpg|jpeg)$/i,
    ".webp"
  );

  const outputPath = path.join(OUTPUT_DIR, outputRelativePath);

  await fs.mkdir(path.dirname(outputPath), { recursive: true });

  await sharp(filePath)
    .resize({
      width: MAX_WIDTH,
      withoutEnlargement: true,
    })
    .webp({
      quality: WEBP_QUALITY,
      effort: 6,
    })
    .toFile(outputPath);

  const optimizedStats = await fs.stat(outputPath);
  const optimizedSizeKB = optimizedStats.size / 1024;

  const saving = (
    ((originalSizeKB - optimizedSizeKB) / originalSizeKB) *
    100
  ).toFixed(1);

  console.log(
    `✅ ${relativePath}
   ${originalSizeKB.toFixed(1)} KB → ${optimizedSizeKB.toFixed(
      1
    )} KB (${saving}% smaller)`
  );
}

async function run() {
  console.log("🖼️ Starting image optimization...\n");

  const files = await getFiles(INPUT_DIR);

  for (const file of files) {
    try {
      await optimizeImage(file);
    } catch (error) {
      console.error(`❌ Failed: ${file}`);
      console.error(error.message);
    }
  }

  console.log("\n✅ Image optimization completed.");
  console.log("Original images were NOT modified.");
}

run();
