const readline = require("readline");

let total = 0;
let count = 0;
const inputSet = new Set();
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    if (!total) {
        total = Number(line);
    } else {
        inputSet.add(line);
        count++;
        if (count === total) {
            rl.close();
        }
    }
}).on("close", () => {
    console.log(Array.from(inputSet).sort((a, b) => a.localeCompare(b)).sort((a, b) => a.length - b.length).join("\n"));

    process.exit();
});