const readline = require("readline");

let n;
const inputList = [];
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    if (!n) {
        n = Number(line);
    } else {
        inputList.push(line.split(" ").map(Number));
        if (inputList.length === n) {
            rl.close();
        }
    }
}).on("close", () => {
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < inputList[i].length; j++) {
            inputList[i][j] += Math.max(
                inputList[i - 1][j - 1] || 0,
                inputList[i - 1][j] || 0
            );
        }
    }
    console.log(Math.max(...inputList[n - 1]));

    process.exit();
});