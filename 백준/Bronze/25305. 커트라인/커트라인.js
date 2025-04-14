const readline = require("readline");

const swap = (list, index1, index2) => {
    const temp = list[index1];
    list[index1] = list[index2];
    list[index2] = temp;
};

const divide = (list, leftIndex, rightIndex) => {
    const pivot = list[leftIndex];

    let leftTargetIndex = leftIndex + 1;
    let rightTargetIndex = rightIndex;

    while (leftTargetIndex <= rightTargetIndex) {
        while (
            leftTargetIndex <= rightTargetIndex &&
            list[leftTargetIndex] >= pivot
        ) {
            leftTargetIndex++;
        }
        while (
            leftTargetIndex <= rightTargetIndex &&
            list[rightTargetIndex] <= pivot
        ) {
            rightTargetIndex--;
        }

        if (leftTargetIndex < rightTargetIndex) {
            swap(list, leftTargetIndex, rightTargetIndex);
        }
    }

    swap(list, leftIndex, rightTargetIndex);

    return rightTargetIndex;
};

const quickSort = (list, leftIndex, rightIndex) => {
    if (leftIndex >= rightIndex) {
        return;
    }

    const pivotIndex = divide(list, leftIndex, rightIndex);
    quickSort(list, leftIndex, pivotIndex - 1);
    quickSort(list, pivotIndex + 1, rightIndex);
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

    quickSort(list, 0, n - 1);
    console.log(list[k - 1]);

    process.exit();
});