const readline = require("readline");

let n;
let k;
let inputList = [];
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    if (!n) {
        [n, k] = line.split(" ").map(Number);
    } else {
        inputList = line.split(" ").map(Number)
        rl.close();
    }
}).on("close", () => {
    console.log(inputList.sort((a, b) => a - b)[k - 1])
    process.exit();
});