const readline = require("readline");

const quadTree = (row, col, len, list) => {
    const target = list[row][col];

    if (len === 1) {
        return target;
    }

    for (let i = row; i < row + len; i++) {
        for (let j = col; j < col + len; j++) {
            if (list[i][j] !== target) {
                const newLen = len / 2;

                return `(${quadTree(row, col, newLen, list)}${quadTree(
                    row,
                    col + newLen,
                    newLen,
                    list
                )}${quadTree(row + newLen, col, newLen, list)}${quadTree(
                    row + newLen,
                    col + newLen,
                    newLen,
                    list
                )})`;
            }
        }
    }

    return target;
};

let n;
const inputList = [];
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    if (!n) {
        n = Number(line);
    } else {
        inputList.push(line.split("").map(Number));
        if (inputList.length === n) {
            rl.close();
        }
    }
}).on("close", () => {
    console.log(quadTree(0, 0, n, inputList));

    process.exit();
});