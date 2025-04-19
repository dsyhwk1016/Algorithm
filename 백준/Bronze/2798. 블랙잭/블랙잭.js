const readline = require("readline");

const inputList = [];
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    inputList.push(line);
    if (inputList.length === 2) {
        rl.close();
    }
}).on("close", () => {
    const [n, m] = inputList[0].split(" ").map(Number);
    const list = inputList[1].split(" ").map(Number);

    let maxNum = Number.MIN_VALUE;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                const sum = list[i] + list[j] + list[k];
                if (sum <= m && sum > maxNum) {
                    maxNum = sum;
                }
            }
        }
    }
    console.log(maxNum);

    process.exit();
});