const fs = require('fs');

for (let i = 1; i <= 25; i++) {
    const inputPath = `./inputs/${i}_input.txt`;
    const inputSamplePath = `./inputs/${i}s_input.txt`;
    const dayDirPath = `./days/${i}`;
    if (!fs.existsSync(inputPath)) {
        fs.writeFileSync(inputPath, '');
    }
    if (!fs.existsSync(inputSamplePath)) {
        fs.writeFileSync(inputSamplePath, '');
    }
    if (!fs.existsSync(dayDirPath)) {
        fs.mkdirSync(dayDirPath);
    }
}