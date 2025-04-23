const readline = require("readline");

const power = (a, b, c) => {
    if (b <= 1n) {
        return a % c;
    }

    const unit = power(a, b / 2n, c);
    return b % 2n ? (unit * unit * a) % c : (unit * unit) % c;
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    const [a, b, c] = line.split(" ").map(BigInt);
    console.log(Number(power(a, b, c)));
    rl.close();
}).on("close", () => {
    process.exit();
});