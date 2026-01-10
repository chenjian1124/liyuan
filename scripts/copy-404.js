import { copyFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 将 dist/index.html 复制为 dist/404.html
// 这样 GitHub Pages 在返回 404 时会加载 Vue 应用，Vue Router 可以处理路由
const distPath = join(__dirname, '..', 'dist');
const indexHtml = join(distPath, 'index.html');
const notFoundHtml = join(distPath, '404.html');

try {
  copyFileSync(indexHtml, notFoundHtml);
  console.log('✓ 已创建 404.html');
} catch (error) {
  console.error('✗ 创建 404.html 失败:', error.message);
  process.exit(1);
}
