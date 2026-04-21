const readline = require("readline");

let n, m;
let treeList = [];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    if (!n) {
        [n, m] = line.split(" ").map(Number);
    } else {
        treeList = line.split(" ").map(Number).sort((a, b) => b - a);
        rl.close();
    }
}).on("close", () => {
    let min = 0;
    let max = treeList[0];

    while (min < max) {
        const mid = min + Math.floor((max - min) / 2);

        const total = treeList.reduce((sum, tree) => {
            const result = tree - mid;
            if (result > 0) {
                sum += result;
            } else {
                sum += 0;
            }
            return sum;
        }, 0);

        if (total >= m) {
            min = mid + 1;
        } else {
            max = mid;
        }
    }

    console.log(min - 1);

    process.exit();
});