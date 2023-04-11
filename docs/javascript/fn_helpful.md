### Sleep
```js
await sleep(1000);
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
```

### Export toàn bộ file js trong 1 folder ra markdown
```shell
 npm install fs-extra
```

```js
const fs = require('fs-extra');

const folderPath = './'; // Thay đổi đường dẫn này để trỏ đến thư mục của bạn
const outputPath = './export.md'; // Thay đổi đường dẫn này để chỉ định tệp Markdown được tạo ra

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  const jsFiles = files.filter((file) => {
    return file.endsWith('.js');
  });

  let output = '';

  jsFiles.forEach((file) => {
    const content = fs.readFileSync(`${folderPath}${file}`, 'utf8');
    output += '```javascript\n';
    output += `// ${file}\n\n`;
    output += `${content}\n`;
    output += '```\n\n';
  });

  fs.writeFile(outputPath, output, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`Exported to ${outputPath}`);
  });
});
```