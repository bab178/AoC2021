// --- Part Two ---
// Considering every single measurement isn't as useful as you expected: there's just too much noise in the data.

// Instead, consider sums of a three-measurement sliding window. Again considering the above example:

// 199  A      
// 200  A B    
// 208  A B C  
// 210    B C D
// 200  E   C D
// 207  E F   D
// 240  E F G  
// 269    F G H
// 260      G H
// 263        H
// Start by comparing the first and second three-measurement windows. The measurements in the first window are marked A (199, 200, 208); their sum is 199 + 200 + 208 = 607. The second window is marked B (200, 208, 210); its sum is 618. The sum of measurements in the second window is larger than the sum of the first, so this first comparison increased.

// Your goal now is to count the number of times the sum of measurements in this sliding window increases from the previous sum. So, compare A with B, then compare B with C, then C with D, and so on. Stop when there aren't enough measurements left to create a new three-measurement sum.

// In the above example, the sum of each three-measurement window is as follows:

// A: 607 (N/A - no previous sum)
// B: 618 (increased)
// C: 618 (no change)
// D: 617 (decreased)
// E: 647 (increased)
// F: 716 (increased)
// G: 769 (increased)
// H: 792 (increased)
// In this example, there are 5 sums that are larger than the previous sum.

// Consider sums of a three-measurement sliding window. How many sums are larger than the previous sum?
const utils = require('../../utils');
const colors = require('../../colors');

const getWindowSum = (input, startIndex, size) => {
    let sum = 0;
    for (let j = 0; j < size; j++) {
        sum += Number(input[startIndex + j]);
    }
    return sum;
}

const main = (input) => {
    let increaseCount = 0;
    const windowSize = 3;

    let previousSum = getWindowSum(input, 0, windowSize);
    for (let i = 1; i <= input.length - windowSize; i++) {
        let sum = getWindowSum(input, i, windowSize);

        if (previousSum == sum) {
            console.log(sum, "(no change)");
        }
        else if (previousSum > sum) {
            utils.setConsoleColor(colors.FgRed);
            console.log(sum, "(decreased)");
        }
        else {
            utils.setConsoleColor(colors.FgGreen);
            console.log(sum, "(increased)");
            increaseCount++;
        }
        previousSum = sum;
    }

    utils.setConsoleColor(colors.Reset);
    console.log(increaseCount);
}

utils.loadData('./inputs/1_input.txt')
    .then((data) => main(data.split(/\r?\n/)))
    .catch(e => console.error(e));
