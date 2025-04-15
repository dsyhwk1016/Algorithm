const readline = require("readline");

const merge = (list, leftIndex, midIndex, rightIndex) => {
    let leftTargetIndex = leftIndex;
    let rightTargetIndex = midIndex + 1;

    const temp = [];
    while (leftTargetIndex <= midIndex && rightTargetIndex <= rightIndex) {
        if (list[leftTargetIndex] < list[rightTargetIndex]) {
            temp.push(list[leftTargetIndex++]);
        } else {
            temp.push(list[rightTargetIndex++]);
        }
    }

    if (leftTargetIndex <= midIndex) {
        for (let i = leftTargetIndex; i <= midIndex; i++) {
            temp.push(list[i]);
        }
    } else {
        for (let i = rightTargetIndex; i <= rightIndex; i++) {
            temp.push(list[i]);
        }
    }

    for (let i = 0; i < temp.length; i++) {
        list[leftIndex + i] = temp[i];
    }
};

const mergeSort = (list, leftIndex, rightIndex) => {
    if (leftIndex >= rightIndex) {
        return;
    }

    const midIndex = parseInt((leftIndex + rightIndex) / 2);
    mergeSort(list, leftIndex, midIndex);
    mergeSort(list, midIndex + 1, rightIndex);
    merge(list, leftIndex, midIndex, rightIndex);
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
        inputList.push(Number(line));
        if (inputList.length === n) {
            rl.close();
        }
    }
}).on("close", () => {
    mergeSort(inputList, 0, n - 1);
    console.log(inputList.join("\n"));

    process.exit();
});