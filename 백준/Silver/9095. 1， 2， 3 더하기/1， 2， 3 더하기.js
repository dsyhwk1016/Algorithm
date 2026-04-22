const readline = require("readline");

let t;
let nList = [];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    if (!t) {
        t = Number(line);
    } else {
        nList.push(Number(line));

        if (nList.length === t) {
            rl.close();
        }
    }
}).on("close", () => {
    nList.map(n => {
        const dp = Array(n + 1).fill(0);
        dp[1] = 1;    // 1
        dp[2] = 2;    // 2
        dp[3] = 4;    // 3

        for (let i = 4; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
        }

        return console.log(dp[n]);
    });

    process.exit();
});