const fs = require('fs'); 
function countVowelsInFile(copyFile) {
    const data = fs.readFileSync(copyFile, 'utf8');
    const vowels = data.match(/[aeiouAEIOU]/g);
    console.log(`Total vowels: ${vowels ? vowels.length : 0}`);
}

countVowelsInFile('copyFile.txt');