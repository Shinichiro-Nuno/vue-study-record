import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    // jest ライクなグローバルテスト API を有効化
    globals: true,
    // happy-dom で DOM をシミュレーションします
    // （peer dependency として happy-dom のインストールが必要です）
    environment: "happy-dom",
  },
});
