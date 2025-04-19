const readline = require("readline");

let inputList;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    inputList = line.split(" ").map(Number);
    rl.close();
}).on("close", () => {
    const [a, b, c, d, e, f] = inputList;

    for (let x = -999; x <= 999; x++) {
        for (let y = -999; y <= 999; y++) {
            if (a * x + b * y === c && d * x + e * y === f) {
                console.log(x, y);
                return;
            }
        }
    }

    process.exit();
});