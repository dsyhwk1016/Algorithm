const readline = require("readline");

let n;
let k;
const inputList = [];
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    if (!n) {
        [n, k] = line.split(" ").map(Number);
    } else {
        inputList.push(line.split(""));

        if (inputList.length === n) {
            rl.close();
        }
    }
}).on("close", () => {
    let minCount = Number.MAX_VALUE;
    for (let i = 0; i <= n - 8; i++) {
        for (let j = 0; j <= k - 8; j++) {
            const count = inputList.slice(i, i + 8).reduce(
                (result, row, rowIndex) => {
                    row.slice(j, j + 8).forEach((tile, colIndex) => {
                        // row+col이 짝수이면 첫 타일과 같은 색이어야함
                        if ((rowIndex + colIndex) % 2) {
                            if (tile !== "B") {
                                result.BStart++;
                            } else {
                                result.WStart++;
                            }
                        } else {
                            if (tile !== "B") {
                                result.WStart++;
                            } else {
                                result.BStart++;
                            }
                        }
                    });

                    return result;
                },
                { BStart: 0, WStart: 0 }
            );

            minCount = Math.min(minCount, count.BStart, count.WStart);
        }
    }

    console.log(minCount);

    process.exit();
});