const readline = require("readline");

const bubbleSort = (list, n, k) => {
    let count = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (list[j] > list[j + 1]) {
                count++;

                const temp = list[j];
                list[j] = list[j + 1];
                list[j + 1] = temp;

                if (count === k) {
                    console.log(list.join(" "));
                    return;
                }
            }
        }
    }

    console.log(-1);
    return;
};

const inputList = [];
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    inputList.push(line);
    if (inputList.length === 2) {
        rl.close();
    }
}).on("close", () => {
    const [n, k] = inputList[0].split(" ").map(Number);
    const list = inputList[1].split(" ").map(Number);
    bubbleSort(list, n, k);
});