const readline = require("readline");

let minusList = [];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    minusList = line.split("-");

    rl.close();
}).on("close", () => {
    console.log(minusList.reduce((sub, formula, index) => {
        const sum = formula.split("+").reduce((sum, num) => sum + Number(num), 0);

        if (index === 0) {
            return sum;
        }

        return sub - sum;
    }, 0));

    process.exit();
});