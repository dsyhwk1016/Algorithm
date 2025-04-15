const readline = require("readline");

const swap = (list, index1, index2) => {
    const temp = list[index1];
    list[index1] = list[index2];
    list[index2] = temp;
};

const divide = (list, leftIndex, rightIndex) => {
    const pivot = list[leftIndex];
    let left = leftIndex + 1;
    let right = rightIndex;

    while (left <= right) {
        while (left <= right && list[left] >= pivot) {
            left++;
        }
        while (left <= right && list[right] <= pivot) {
            right--;
        }

        if (left < right) {
            swap(list, left, right);
        }
    }

    swap(list, leftIndex, right);

    return right;
};

const quickSort = (list, leftIndex, rightIndex) => {
    if (leftIndex >= rightIndex) {
        return;
    }

    const pivotIndex = divide(list, leftIndex, rightIndex);
    quickSort(list, leftIndex, pivotIndex - 1);
    quickSort(list, pivotIndex + 1, rightIndex);
};

let n;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    n = line;
    rl.close();
}).on("close", () => {
    const list = n.split("");

    quickSort(list, 0, list.length - 1);
    console.log(list.join(""));

    process.exit();
});