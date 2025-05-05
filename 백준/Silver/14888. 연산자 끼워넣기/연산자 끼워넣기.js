const readline = require("readline");

let n;
let numList;
let operList;
let max = -Number.MAX_VALUE;
let min = Number.MAX_VALUE;

const selectOper = (result, targetIndex) => {
    if (targetIndex === n) {
        max = Math.max(max, result);
        min = Math.min(min, result);
        return;
    }

    if (operList[0] > 0) {
        operList[0]--;
        selectOper(result + numList[targetIndex], targetIndex + 1);
        operList[0]++;
    }
    if (operList[1] > 0) {
        operList[1]--;
        selectOper(result - numList[targetIndex], targetIndex + 1);
        operList[1]++;
    }
    if (operList[2] > 0) {
        operList[2]--;
        selectOper(result * numList[targetIndex], targetIndex + 1);
        operList[2]++;
    }
    if (operList[3] > 0) {
        operList[3]--;
        const temp = parseInt(result / numList[targetIndex]);
        selectOper(temp ? temp : 0, targetIndex + 1);
        operList[3]++;
    }
};

const inputList = [];
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    inputList.push(line);

    if (inputList.length === 3) {
        rl.close();
    }
}).on("close", () => {
    n = Number(inputList[0]);
    numList = inputList[1].split(" ").map(Number);
    operList = inputList[2].split(" ").map(Number);

    selectOper(numList[0], 1);

    console.log(max);
    console.log(min);

    process.exit();
});