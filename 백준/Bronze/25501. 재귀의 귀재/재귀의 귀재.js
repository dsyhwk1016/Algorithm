const readline = require("readline");

const isPalindrome = (str, leftIndex, rightIndex, count = 0) => {
    count++;

    if (leftIndex >= rightIndex) {
        return console.log(1, count);
    }

    if (str[leftIndex] !== str[rightIndex]) {
        return console.log(0, count);
    } else {
        return isPalindrome(str, leftIndex + 1, rightIndex - 1, count);
    }
};

let n;
const testCase = [];
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    if (!n) {
        n = Number(line);
    } else {
        testCase.push(line);
        if (testCase.length === n) {
            rl.close();
        }
    }
}).on("close", () => {
    for (const str of testCase) {
        isPalindrome(str, 0, str.length - 1);
    }
});