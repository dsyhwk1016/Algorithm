const readline = require("readline");

let n;

const factorial = (n) => {
    if (n <= 1) {
        return 1;
    }

    return n * factorial(n - 1);
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    if (!n) {
        n = Number(line);
        rl.close();
    }
}).on("close", () => {
    console.log(factorial(n));

    process.exit();
});