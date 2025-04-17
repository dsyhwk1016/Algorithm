const readline = require("readline");

let fibonacci1Count = 0;
const fibonacci1 = (n) => {
    if (n <= 2) {
        fibonacci1Count++;
        return 1;
    }

    return fibonacci1(n - 1) + fibonacci1(n - 2);
};

let fibonacci2Count = 0;
const fibonacci2 = (n) => {
    const result = { 1: 1, 2: 1 };
    for (let i = 3; i <= n; i++) {
        result[i] = result[i - 1] + result[i - 2];
        fibonacci2Count++;
    }

    return result[n];
};

let n;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    n = Number(line);
    rl.close();
}).on("close", () => {
    fibonacci1(n);
    fibonacci2(n);
    console.log(fibonacci1Count, fibonacci2Count);

    process.exit();
});