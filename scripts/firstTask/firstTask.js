const path = require('path');
const concat = require('concat');
const read = require('fs-readdir-recursive');

const rootPath = path.join(__dirname);
const foundFiles = read(rootPath).filter((item) => item.endsWith('.txt'));
foundFiles.sort((a, b) => path.parse(a).name.localeCompare(path.parse(b).name));

for (let i = 0; i < foundFiles.length; i++) {
    const absolutePath = `../../../textFiles/${foundFiles[i]}`;
    foundFiles[i] = absolutePath;
}
concat(foundFiles, 'resultOfConcat.txt');
