const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    const n = Number(line);

    let count = 0;
    for (let i = 1; i <= n; i++) {
        const list = String(i).split("");
        if (list.length === 1) {
            count++;
            continue;
        } else {
            let isAllSame = true;
            const term = list[0] - list[1];
            for (let j = 1; j < list.length - 1; j++) {
                if (list[j] - list[j + 1] !== term) {
                    isAllSame = false;
                    break;
                }
            }

            if (isAllSame) {
                count++;
            }
        }
    }

    console.log(count);
    rl.close();
}).on("close", () => {
    process.exit();
});