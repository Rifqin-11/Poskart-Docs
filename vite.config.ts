import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import fs from "node:fs";
import path from "node:path";

const srcLogo = "/Users/iqinau/Coding/Poskart/poskart_admin/public/app-logo.png";
const destPublic = path.resolve(__dirname, "public");

if (fs.existsSync(srcLogo)) {
  if (!fs.existsSync(destPublic)) {
    fs.mkdirSync(destPublic, { recursive: true });
  }
  fs.copyFileSync(srcLogo, path.join(destPublic, "app-logo.png"));
  fs.copyFileSync(srcLogo, path.join(destPublic, "favicon.ico"));
  fs.copyFileSync(srcLogo, path.join(destPublic, "favicon.png"));
}

export default defineConfig({
  plugins: [tailwindcss(), reactRouter()],
  resolve: {
    tsconfigPaths: true,
  },
});
