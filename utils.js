const fs = require('fs')

const loadData = async (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', function (err, data) {
            if (err) {
                reject(err);
            }
            resolve(data);
        });
    });
}

const setConsoleColor = (colorCode) => {
    process.stdout.write(colorCode);
}

module.exports = { loadData, setConsoleColor };