// --- Part Two ---
// Based on your calculations, the planned course doesn't seem to make any sense. You find the submarine manual and discover that the process is actually slightly more complicated.

// In addition to horizontal position and depth, you'll also need to track a third value, aim, which also starts at 0. The commands also mean something entirely different than you first thought:

// down X increases your aim by X units.
// up X decreases your aim by X units.
// forward X does two things:
// It increases your horizontal position by X units.
// It increases your depth by your aim multiplied by X.
// Again note that since you're on a submarine, down and up do the opposite of what you might expect: "down" means aiming in the positive direction.

// Now, the above example does something different:

// forward 5 adds 5 to your horizontal position, a total of 5. Because your aim is 0, your depth does not change.
// down 5 adds 5 to your aim, resulting in a value of 5.
// forward 8 adds 8 to your horizontal position, a total of 13. Because your aim is 5, your depth increases by 8*5=40.
// up 3 decreases your aim by 3, resulting in a value of 2.
// down 8 adds 8 to your aim, resulting in a value of 10.
// forward 2 adds 2 to your horizontal position, a total of 15. Because your aim is 10, your depth increases by 2*10=20 to a total of 60.
// After following these new instructions, you would have a horizontal position of 15 and a depth of 60. (Multiplying these produces 900.)

// Using this new interpretation of the commands, calculate the horizontal position and depth you would have after following the planned course. What do you get if you multiply your final horizontal position by your final depth?
const utils = require('../../utils');
const colors = require('../../colors');

const main = (input) => {
    let x = 0, y = 0, aim = 0;
    for (let i = 0; i < input.length; i++) {
        const split = input[i].split(' ');
        const dir = split[0];
        const amount = Number(split[1]);
        process.stdout.write(`${dir} ${amount} `);
        switch (dir) {
            case 'forward':
                x += amount;
                process.stdout.write(`adds ${amount} to your horizontal position, a total of ${x}. Because your aim is ${aim}, `);
                if (aim == 0) {
                    process.stdout.write(`your depth does not change.`);
                } else {
                    const aimCalc = aim * amount;
                    y += aimCalc;
                    process.stdout.write(`your depth increases by ${amount}*${aim}=${aimCalc}`);
                    if (y - aimCalc > 0) {
                        process.stdout.write(` to a total of ${y}.`);
                    } else {
                        process.stdout.write('.');
                    }
                }
                break;
            case 'down':
                aim += amount;
                process.stdout.write(`adds ${amount} to your aim, resulting in a value of ${aim}.`);
                break;
            case 'up':
                aim -= amount;
                process.stdout.write(`decreases your aim by ${amount}, resulting in a value of ${aim}.`);
                break;
        }
        process.stdout.write(`\r\n`);
    }

    console.log(`${x} * ${y} = ${x * y}`);
}

utils.loadData('./inputs/2_input.txt')
    .then((data) => main(data.split(/\r?\n/)))
    .catch(e => console.error(e));
