import fs from "node:fs";
import path from "node:path";

export function ensurePoskartAssets() {
  const srcLogo = "/Users/iqinau/Coding/Poskart/poskart_admin/public/app-logo.png";
  const srcBrandLogo = "/Users/iqinau/Coding/Poskart/poskart_admin/public/Logo Poskart.png";
  const destPublic = path.resolve(process.cwd(), "public");

  try {
    if (fs.existsSync(srcLogo)) {
      if (!fs.existsSync(destPublic)) {
        fs.mkdirSync(destPublic, { recursive: true });
      }
      fs.copyFileSync(srcLogo, path.join(destPublic, "app-logo.png"));
      fs.copyFileSync(srcLogo, path.join(destPublic, "favicon.ico"));
      fs.copyFileSync(srcLogo, path.join(destPublic, "favicon.png"));
      if (fs.existsSync(srcBrandLogo)) {
        fs.copyFileSync(srcBrandLogo, path.join(destPublic, "Logo Poskart.png"));
      }
      console.log("[Asset Sync] Successfully copied app-logo.png and Logo Poskart.png to public/");
    }
  } catch (err) {
    console.error("[Asset Sync Error]", err);
  }
}

// Execute immediately when server loads module
ensurePoskartAssets();
