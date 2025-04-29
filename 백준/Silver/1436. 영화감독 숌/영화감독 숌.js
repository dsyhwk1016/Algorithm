const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    const n = Number(line);

    let num = 666;
    let count = 0;
    while (true) {
        if (String(num).includes("666")) {
            count++;
        }

        if (count === n) {
            break;
        }

        num++;
    }

    console.log(num);

    rl.close();
}).on("close", () => {
    process.exit();
});