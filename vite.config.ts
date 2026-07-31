import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import fs from "node:fs";
import path from "node:path";

function copyPoskartAssetsPlugin() {
  return {
    name: "copy-poskart-assets",
    buildStart() {
      const srcLogo = "/Users/iqinau/Coding/Poskart/poskart_admin/public/app-logo.png";
      const srcBrandLogo = "/Users/iqinau/Coding/Poskart/poskart_admin/public/Logo Poskart.png";
      const destPublic = path.resolve(__dirname, "public");

      if (fs.existsSync(srcLogo)) {
        if (!fs.existsSync(destPublic)) {
          fs.mkdirSync(destPublic, { recursive: true });
        }
        fs.copyFileSync(srcLogo, path.join(destPublic, "app-logo.png"));
        fs.copyFileSync(srcLogo, path.join(destPublic, "poskart-favicon.ico"));
        fs.copyFileSync(srcLogo, path.join(destPublic, "poskart-favicon.png"));
        if (fs.existsSync(srcBrandLogo)) {
          fs.copyFileSync(srcBrandLogo, path.join(destPublic, "Logo Poskart.png"));
        }
      }
    },
    configureServer() {
      const srcLogo = "/Users/iqinau/Coding/Poskart/poskart_admin/public/app-logo.png";
      const srcBrandLogo = "/Users/iqinau/Coding/Poskart/poskart_admin/public/Logo Poskart.png";
      const destPublic = path.resolve(__dirname, "public");

      if (fs.existsSync(srcLogo)) {
        if (!fs.existsSync(destPublic)) {
          fs.mkdirSync(destPublic, { recursive: true });
        }
        fs.copyFileSync(srcLogo, path.join(destPublic, "app-logo.png"));
        fs.copyFileSync(srcLogo, path.join(destPublic, "poskart-favicon.ico"));
        fs.copyFileSync(srcLogo, path.join(destPublic, "poskart-favicon.png"));
        if (fs.existsSync(srcBrandLogo)) {
          fs.copyFileSync(srcBrandLogo, path.join(destPublic, "Logo Poskart.png"));
        }
      }
    }
  };
}

// Immediate execution when module loads
const srcLogo = "/Users/iqinau/Coding/Poskart/poskart_admin/public/app-logo.png";
const srcBrandLogo = "/Users/iqinau/Coding/Poskart/poskart_admin/public/Logo Poskart.png";
const destPublic = path.resolve(__dirname, "public");

if (fs.existsSync(srcLogo)) {
  if (!fs.existsSync(destPublic)) {
    fs.mkdirSync(destPublic, { recursive: true });
  }
  fs.copyFileSync(srcLogo, path.join(destPublic, "app-logo.png"));
  fs.copyFileSync(srcLogo, path.join(destPublic, "poskart-favicon.ico"));
  fs.copyFileSync(srcLogo, path.join(destPublic, "poskart-favicon.png"));
  if (fs.existsSync(srcBrandLogo)) {
    fs.copyFileSync(srcBrandLogo, path.join(destPublic, "Logo Poskart.png"));
  }
}

export default defineConfig({
  plugins: [copyPoskartAssetsPlugin(), tailwindcss(), reactRouter()],
  resolve: {
    tsconfigPaths: true,
  },
});
