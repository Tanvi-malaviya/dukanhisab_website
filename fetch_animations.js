  const fs = require('fs');
  const path = require('path');
  const { execSync } = require('child_process');

  async function downloadAndExtract(name, url) {
    console.log(`Downloading ${name} from ${url}...`);
    const res = await fetch(url);
    const buffer = Buffer.from(await res.arrayBuffer());
    const zipPath = path.join(__dirname, `${name}.zip`);
    const extractDir = path.join(__dirname, 'temp_anim', name);
    fs.writeFileSync(zipPath, buffer);
    
    if (!fs.existsSync(extractDir)) {
      fs.mkdirSync(extractDir, { recursive: true });
    }
    
    execSync(`powershell -Command "Expand-Archive -Path '${zipPath}' -DestinationPath '${extractDir}' -Force"`);
    fs.unlinkSync(zipPath);
    
    const animFiles = fs.readdirSync(path.join(extractDir, 'animations'));
    const jsonFile = path.join(extractDir, 'animations', animFiles[0]);
    const animData = JSON.parse(fs.readFileSync(jsonFile, 'utf8'));
    console.log(`[${name}] Name: ${animData.nm}, Layers: ${animData.layers?.length}, Size: ${fs.statSync(jsonFile).size} bytes`);
    
    // copy to public/animations/[name].json
    const targetPath = path.join(__dirname, 'public', 'animations', `${name}.json`);
    fs.copyFileSync(jsonFile, targetPath);
    console.log(`Saved to ${targetPath}`);
  }

  async function main() {
    const items = [
      { name: 'receipt_scanner', url: 'https://assets-v2.lottiefiles.com/a/6afd5086-117e-11ee-a64f-5b1c3c3d8360/8piV4UMoja.lottie' },
      { name: 'receipt_printer_modern', url: 'https://assets-v2.lottiefiles.com/a/9a2ef5e6-2cec-4fe3-a6f6-3e807c407529/5lTtuGAjVF.lottie' },
      { name: 'pos_cash_register', url: 'https://assets-v2.lottiefiles.com/a/bb5961c2-1170-11ee-89c3-8fa836d29e88/UzvJLDdQoQ.lottie' },
      { name: 'payment_success', url: 'https://assets-v2.lottiefiles.com/a/6be5aa38-1152-11ee-9300-83d12437d51c/Ty8PpWRmf6.lottie' }
    ];

    for (const item of items) {
      try {
        await downloadAndExtract(item.name, item.url);
      } catch (e) {
        console.error(`Failed ${item.name}:`, e.message);
      }
    }
  }

  main();
