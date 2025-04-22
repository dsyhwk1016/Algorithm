const readline = require("readline");

const multiplyMatrix = (n, k, matrixA, matrixB) => {
    const result = Array.from({ length: n }, () => new Array(k).fill(0));

    for (let i = 0; i < n; i++) {
        const dataA = matrixA[i];
        for (let j = 0; j < k; j++) {
            result[i][j] = dataA.reduce(
                (result, data, index) => result + data * matrixB[index][j],
                0
            );
        }
    }

    return result;
};

const inputList = [];
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    inputList.push(line.split(" ").map(Number));
}).on("close", () => {
    const [n, m] = inputList[0];
    const k = inputList[n + 1][1];
    const matrixA = inputList.slice(1, n + 1);
    const matrixB = inputList.slice(n + 2);

    const result = multiplyMatrix(n, k, matrixA, matrixB);
    result.forEach((row) => console.log(row.join(" ")));

    process.exit();
});