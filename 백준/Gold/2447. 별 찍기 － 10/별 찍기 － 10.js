const readline = require("readline");

const starts = (num) => {
    if (num <= 1) {
        return [["*"]];
    }

    const divideLength = Math.floor(num / 3);
    const unit = starts(divideLength);

    const result = [];
    for (let i = 0; i < num; i++) {
        const row = [];
        for (let j = 0; j < num; j++) {
            if (
                i < divideLength ||
                j < divideLength ||
                i >= divideLength * 2 ||
                j >= divideLength * 2
            ) {
                row.push(unit[i % divideLength][j % divideLength]);
            } else {
                row.push(" ");
            }
        }
        result.push(row);
    }

    return result;
};

let n;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    n = Number(line);
    rl.close();
}).on("close", () => {
    const result = starts(n);

    result.forEach((data) => console.log(data.join("")));

    process.exit();
});