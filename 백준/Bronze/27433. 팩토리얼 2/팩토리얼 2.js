const readline = require("readline");

const factorial = (n) => {
    if (n < 1) {
        return 1;
    }

    return n * factorial(n - 1);
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
    console.log(factorial(n));
});
