import path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  // 文档根目录
  root: 'docs',
  title: "Rspress",
  description: "Rspack-based Static Site Generator",
  icon: "/rspress-icon.png",
  logo: {
    light: "/rspress-light-logo.png",
    dark: "/rspress-dark-logo.png",
  },
  themeConfig: {
    socialLinks: [{ icon: "github", mode: "link", content: "https://github.com/web-infra-dev/rspress" }],
  },
  globalStyles: path.join(__dirname, 'src/index.css'),
});
