const readline = require("readline");

let n;
let dp;
const inputList = [];
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    if (!n) {
        n = Number(line);
        dp = Array.from({ length: n }, () => ({ r: 0, g: 0, b: 0 }));
    } else {
        const [r, g, b] = line.split(" ").map(Number);
        inputList.push({ r, g, b });
        if (inputList.length === n) {
            rl.close();
        }
    }
}).on("close", () => {
    dp[0] = inputList[0];

    for (let i = 1; i < n; i++) {
        dp[i].r = inputList[i].r + Math.min(dp[i - 1].g, dp[i - 1].b);
        dp[i].g = inputList[i].g + Math.min(dp[i - 1].r, dp[i - 1].b);
        dp[i].b = inputList[i].b + Math.min(dp[i - 1].r, dp[i - 1].g);
    }

    console.log(Math.min(dp[n - 1].r, dp[n - 1].g, dp[n - 1].b));

    process.exit();
});