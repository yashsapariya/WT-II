const fs = require('fs');
function countWordsInFile(copyFile) {
    const data = fs.readFileSync(copyFile, 'utf8');
    const words = data.split(/\s+/);
    console.log(`Total words: ${words.length}`);
}

countWordsInFile('copyFile.txt');