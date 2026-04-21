const readline = require("readline");

let n;
let result = [];

const hanoi = (n, start, end, temp) => {
    if (n <= 1) {
        result.push(`${start} ${end}`);
        return;
    }

    hanoi(n - 1, start, temp, end);
    result.push(`${start} ${end}`);
    hanoi(n - 1, temp, end, start);

    return;
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
    hanoi(n, 1, 3, 2);

    console.log(result.length);
    console.log(result.join("\n"));

    process.exit();
});