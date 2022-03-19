// node 里不支持直接解构导入: import { fileURLToPath } from 'url'; <-- 错误
// 只能写成以下形式: 先整体导入再解构:
import url from 'url';
import path from 'path';
const { fileURLToPath } = url
const { dirname } = path

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const webpackConfig = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'myLib.bundle.js',
  },
};


export default webpackConfig