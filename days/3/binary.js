// --- Day 3: Binary Diagnostic ---
// The submarine has been making some odd creaking noises, so you ask it to produce a diagnostic report just in case.

// The diagnostic report (your puzzle input) consists of a list of binary numbers which, when decoded properly, can tell you many useful things about the conditions of the submarine. The first parameter to check is the power consumption.

// You need to use the binary numbers in the diagnostic report to generate two new binary numbers (called the gamma rate and the epsilon rate). The power consumption can then be found by multiplying the gamma rate by the epsilon rate.

// Each bit in the gamma rate can be determined by finding the most common bit in the corresponding position of all numbers in the diagnostic report. For example, given the following diagnostic report:

// 00100
// 11110
// 10110
// 10111
// 10101
// 01111
// 00111
// 11100
// 10000
// 11001
// 00010
// 01010
// Considering only the first bit of each number, there are five 0 bits and seven 1 bits. Since the most common bit is 1, the first bit of the gamma rate is 1.

// The most common second bit of the numbers in the diagnostic report is 0, so the second bit of the gamma rate is 0.

// The most common value of the third, fourth, and fifth bits are 1, 1, and 0, respectively, and so the final three bits of the gamma rate are 110.

// So, the gamma rate is the binary number 10110, or 22 in decimal.

// The epsilon rate is calculated in a similar way; rather than use the most common bit, the least common bit from each position is used. So, the epsilon rate is 01001, or 9 in decimal. Multiplying the gamma rate (22) by the epsilon rate (9) produces the power consumption, 198.

// Use the binary numbers in your diagnostic report to calculate the gamma rate and epsilon rate, then multiply them together. What is the power consumption of the submarine? (Be sure to represent your answer in decimal, not binary.)
const utils = require('../../utils');
const colors = require('../../colors');

const stringToBinary = (inputString) => {
    let sum = 0;
    for (let i = 0; i < inputString.length; i++) {
        // console.log(`2^${inputString.length - i}=`, inputString[i] === '1' ? Math.pow(2, inputString.length - i - 1) : 0, inputString[i])
        sum += inputString[i] === '1' ? Math.pow(2, inputString.length - i - 1) : 0;
    }
    // console.log(sum);
    return sum;
}

const main = (input) => {
    let gamma = 0, epsilon = 0;
    let gammaString = '', epsilonString = '';
    let data = [];
    for (let i = 0; i < input.length; i++) {

        // process columns
        for (let j = 0; j < input[i].length; j++) {
            const binVal = input[i][j];

            // create column object
            if (data[j] === undefined) {
                // data[j] = { eCount: 0, gCount: 0, col: [binVal] };
                data[j] = { eCount: 0, gCount: 0 };
            } else {

                // add to gamma vs epsilon counts
                if (binVal === '1') {
                    data[j].gCount++;
                } else {
                    data[j].eCount++;
                }
                // data[j].col.push(binVal);
            }
        }
    }

    // create strings based on processed data
    for (let i = 0; i < input[0].length; i++) {
        const isGammaGreater = data[i].gCount > data[i].eCount;
        gammaString += isGammaGreater ? '1' : '0';
        epsilonString += !isGammaGreater ? '1' : '0';
    }
    console.log(gammaString, epsilonString);

    gamma = stringToBinary(gammaString);
    console.log();

    epsilon = stringToBinary(epsilonString);
    console.log(gamma, epsilon);

    // get result
    console.log(gamma * epsilon);
}

utils.loadData('./inputs/3_input.txt')
    .then((data) => main(data.split(/\r?\n/)))
    .catch(e => console.error(e));
