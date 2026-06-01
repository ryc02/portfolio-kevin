import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const assetsDir = path.join(process.cwd(), 'public', 'assets');

async function processImages() {
  const files = fs.readdirSync(assetsDir);
  let totalSaved = 0;

  for (const file of files) {
    if (file.match(/\.(png|jpe?g)$/i)) {
      const ext = path.extname(file);
      const baseName = path.basename(file, ext);
      const inPath = path.join(assetsDir, file);
      const outPath = path.join(assetsDir, `${baseName}.webp`);

      try {
        const statsIn = fs.statSync(inPath);
        
        await sharp(inPath)
          .webp({ quality: 80 })
          .toFile(outPath);
          
        const statsOut = fs.statSync(outPath);
        const saved = statsIn.size - statsOut.size;
        totalSaved += saved;
        
        console.log(`Converted ${file} to .webp. Saved ${(saved / 1024 / 1024).toFixed(2)} MB`);
        
        // delete original file to save space? We can keep it or delete it.
        // Let's keep it for now and let python replace references.
        fs.unlinkSync(inPath); // actually, let's delete to prevent Vercel bundle bloat!
        console.log(`Deleted original ${file}`);

      } catch (err) {
        console.error(`Error processing ${file}:`, err);
      }
    }
  }

  console.log(`\nTotal space saved: ${(totalSaved / 1024 / 1024).toFixed(2)} MB!`);
}

processImages();
