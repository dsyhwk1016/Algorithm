const readline = require("readline");

let n, k;
let coinList = [];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    if (!n) {
        [n, k] = line.split(" ").map(Number);
    } else {
        coinList.push(Number(line));

        if (coinList.length === n) {
            rl.close();
        }
    }
}).on("close", () => {
    let total = 0;
    let i = n - 1;
    while (k) {
        const coin = coinList[i--];
        const count = Math.floor(k / coin);

        k -= coin * count;
        total += count;
    }

    console.log(total);

    process.exit();
});