const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/"\/([^"]*\.(png|jpg|jpeg|gif))(\?[^"]*)?"/g, '"./$1$3"');
  fs.writeFileSync(filePath, content);
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.html')) {
      replaceInFile(fullPath);
    }
  }
}

walkDir('./src');
replaceInFile('./index.html');
console.log("Done");
