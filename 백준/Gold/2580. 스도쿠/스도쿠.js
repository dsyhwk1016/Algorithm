const readline = require("readline");

const check = (data, row, col) => {
    const rowQuotient = parseInt(row / 3);
    const colQuotient = parseInt(col / 3);

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const targetIndex = i * 3 + j;

            if (
                inputList[row][targetIndex] === data ||
                inputList[targetIndex][col] === data ||
                inputList[rowQuotient * 3 + i][colQuotient * 3 + j] === data
            ) {
                return false;
            }
        }
    }

    return true;
};

const sudoku = (n) => {
    if (n === blankList.length) {
        inputList.forEach((row) => console.log(row.join(" ")));
        return true;
    }

    const [row, col] = blankList[n];
    for (let data = 1; data <= 9; data++) {
        if (check(data, row, col)) {
            inputList[row][col] = data;
            if (sudoku(n + 1)) {
                return true;
            }
            inputList[row][col] = 0;
        }
    }
};

const inputList = [];
const blankList = [];
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    inputList.push(
        line.split(" ").map((num, index) => {
            if (num === "0") {
                blankList.push([inputList.length, index]);
            }
            return Number(num);
        })
    );

    if (inputList.length === 9) {
        rl.close();
    }
}).on("close", () => {
    sudoku(0);
    process.exit();
});