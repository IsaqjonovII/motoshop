import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import { compression } from "vite-plugin-compression2";
export default defineConfig({
  plugins: [react(), tsconfigPaths(), compression()],
  resolve:{alias: [{ find: "@", replacement: "/src" }],},
});
