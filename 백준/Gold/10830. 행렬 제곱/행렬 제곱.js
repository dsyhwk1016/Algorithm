const readline = require("readline");

const multiplyMattrix = (n, matrixA, matrixB) => {
    const result = Array.from({ length: n }, () => new Array(n).fill(0n));

    for (let i = 0; i < n; i++) {
        const rowA = matrixA[i];
        for (let j = 0; j < n; j++) {
            result[i][j] =
                rowA.reduce(
                    (result, value, index) =>
                        result + value * matrixB[index][j],
                    0n
                ) % 1000n;
        }
    }

    return result;
};

const powerMatrix = (n, matrix, b) => {
    if (b <= 1) {
        return matrix.map((row) => row.map((value) => value % 1000n));
    }

    const unit = powerMatrix(n, matrix, Math.floor(b / 2));
    const result = multiplyMattrix(n, unit, unit);
    return b % 2 ? multiplyMattrix(n, result, matrix) : result;
};

const inputList = [];
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    inputList.push(line.split(" ").map(BigInt));
}).on("close", () => {
    const [n, b] = inputList[0].map(Number);
    const matrix = inputList.slice(1);

    const result = powerMatrix(n, matrix, b);
    result.forEach((row) => console.log(row.join(" ")));

    process.exit();
});