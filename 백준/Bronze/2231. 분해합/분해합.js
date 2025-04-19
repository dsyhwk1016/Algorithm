const readline = require("readline");

let n;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    n = Number(line);
    rl.close();
}).on("close", () => {
    let i;
    for (i = 1; i <= n; i++) {
        const sum =
            String(i)
                .split("")
                .reduce((sum, num) => sum + Number(num), 0) + i;
        if (sum === n) {
            break;
        }
    }

    if (i > n) {
        console.log(0);
    } else {
        console.log(i);
    }

    process.exit();
});