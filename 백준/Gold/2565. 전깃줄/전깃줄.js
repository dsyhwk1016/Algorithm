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
    inputList.sort((a, b) => a[0] - b[0]);

    let result = Number.MAX_VALUE;
    const dp = new Array(n).fill(1);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (inputList[i][1] > inputList[j][1]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }

        result = Math.min(result, n - dp[i]);
    }
    console.log(result);

    process.exit();
});