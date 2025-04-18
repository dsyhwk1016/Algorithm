const readline = require("readline");

let n;
let dp;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    n = Number(line);
    dp = Array.from({ length: n }, () => [0, 0]);
    rl.close();
}).on("close", () => {
    dp[0] = 1; // 만들 수 있는 길이가 1인 수열 개수 (1)
    dp[1] = 2; // 만들 수 있는 길이가 2인 수열 개수 (11/00)

    for (let i = 2; i < n; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % 15746; // 마지막 타일이 1인 경우  + 마지막 타일이 00인 경우
    }

    console.log(dp[n - 1]);

    process.exit();
});