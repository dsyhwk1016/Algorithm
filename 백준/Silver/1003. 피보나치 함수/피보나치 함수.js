const readline = require("readline");

let t;
let nList = [];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    if (!t) {
        t = Number(line);
    } else {
        nList.push(Number(line));

        if (nList.length === t) {
            rl.close();
        }
    }
}).on("close", () => {
    nList.map(n => {
        const counts = [0, 0];

        if (n <= 1) {
            counts[n] += 1;
            return console.log(counts.join(" "));
        }

        let fibo1 = [1, 0];   // 0
        let fibo2 = [0, 1];   // 1

        for (let i = 2; i <= n; i++) {
            [fibo1, fibo2] = [fibo2, [fibo1[0] + fibo2[0], fibo1[1] + fibo2[1]]];
        }

        return console.log(fibo2.join(" "));
    });

    process.exit();
});