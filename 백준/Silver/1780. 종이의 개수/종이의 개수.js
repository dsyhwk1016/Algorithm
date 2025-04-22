const readline = require("readline");

const result = [0, 0, 0];

const divide = (row, col, len, list) => {
    const target = list[row][col];

    if (len === 1) {
        result[target + 1]++;
        return;
    }

    for (let i = row; i < row + len; i++) {
        for (let j = col; j < col + len; j++) {
            if (list[i][j] !== target) {
                const newLen = len / 3;

                divide(row, col, newLen, list);
                divide(row, col + newLen, newLen, list);
                divide(row, col + newLen * 2, newLen, list);
                divide(row + newLen, col, newLen, list);
                divide(row + newLen, col + newLen, newLen, list);
                divide(row + newLen, col + newLen * 2, newLen, list);
                divide(row + newLen * 2, col, newLen, list);
                divide(row + newLen * 2, col + newLen, newLen, list);
                divide(row + newLen * 2, col + newLen * 2, newLen, list);
                return;
            }
        }
    }

    result[target + 1]++;
    return;
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
        inputList.push(line.split(" ").map(Number));
        if (inputList.length === n) {
            rl.close();
        }
    }
}).on("close", () => {
    divide(0, 0, n, inputList);

    console.log(result[0]);
    console.log(result[1]);
    console.log(result[2]);

    process.exit();
});