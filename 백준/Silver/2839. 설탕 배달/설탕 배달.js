const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    const n = Number(line);

    let minCount = -1;
    for (let i = Math.floor(n / 5); i >= 0; i--) {
        const target = n - i * 5;
        const etc = target % 3;
        if (etc) {
            continue;
        } else {
            if (minCount > 0) {
                minCount = Math.min(minCount, i + Math.floor(target / 3));
            } else {
                minCount = i + Math.floor(target / 3);
            }
        }
    }

    console.log(minCount);

    rl.close();
}).on("close", () => {
    process.exit();
});