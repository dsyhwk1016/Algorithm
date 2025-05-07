const readline = require("readline");

const checkQueen = (queenList, row, col) => {
    for (let i = 0; i < queenList.length; i++) {
        if (
            queenList[i] === col ||
            Math.abs(row - i) === Math.abs(col - queenList[i])
        ) {
            return false;
        }
    }
    return true;
};

const positionQueen = (n, count) => {
    if (count === n) {
        result++;
        return;
    }

    for (let i = 0; i < n; i++) {
        if (checkQueen(queenList, count, i)) {
            queenList.push(i);
            positionQueen(n, count + 1);
            queenList.pop();
        }
    }
};

let n;
const queenList = [];
let result = 0;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    n = Number(line);
    rl.close();
}).on("close", () => {
    positionQueen(n, 0);
    console.log(result);
    process.exit();
});