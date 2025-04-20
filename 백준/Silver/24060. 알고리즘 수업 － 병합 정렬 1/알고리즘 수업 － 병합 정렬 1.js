const readline = require("readline");

const saveList = [];
const merge = (list, leftIndex, midIndex, rightIndex) => {
    let left = leftIndex;
    let right = midIndex + 1;

    const temp = [];
    while (left <= midIndex && right <= rightIndex) {
        if (list[left] <= list[right]) {
            temp.push(list[left++]);
        } else {
            temp.push(list[right++]);
        }
    }

    if (left <= midIndex) {
        for (let i = left; i <= midIndex; i++) {
            temp.push(list[i]);
        }
    } else {
        for (let i = right; i <= rightIndex; i++) {
            temp.push(list[i]);
        }
    }

    for (let i = 0; i < temp.length; i++) {
        list[leftIndex + i] = temp[i];
        saveList.push(temp[i]);
    }
};

const mergeSort = (list, leftIndex, rightIndex) => {
    if (leftIndex >= rightIndex) {
        return;
    }

    const midIndex = Math.floor((leftIndex + rightIndex) / 2);
    mergeSort(list, leftIndex, midIndex);
    mergeSort(list, midIndex + 1, rightIndex);
    merge(list, leftIndex, midIndex, rightIndex);
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
    const [a, k] = inputList[0].split(" ").map(Number);
    const list = inputList[1].split(" ").map(Number);

    mergeSort(list, 0, a - 1);

    console.log(saveList[k - 1] || -1);

    process.exit();
});