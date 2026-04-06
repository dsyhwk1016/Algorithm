const readline = require("readline");

let swapCount = 0;
const merge = (list, left, mid, right) => {
    let leftIndex = left;
    let rightIndex = mid + 1;
    const temp = [];

    while (leftIndex <= mid && rightIndex <= right) {
        if (list[leftIndex] > list[rightIndex]) {
            swapCount += rightIndex - (left + temp.length);
            temp.push(list[rightIndex++])
        } else {
            temp.push(list[leftIndex++])
        }
    }

    if (leftIndex <= mid) {
        temp.push(...list.slice(leftIndex, mid + 1))
    } else {
        temp.push(...list.slice(rightIndex, right + 1))
    }

    for (let i = 0; i < temp.length; i++) {
        list[left + i] = temp[i];
    }
}
const mergeSort = (list, left, right) => {
    if (left >= right) return

    const mid = Math.floor((left + right) / 2)
    mergeSort(list, left, mid)
    mergeSort(list, mid + 1, right)
    merge(list, left, mid, right)
}

let n;
let inputList = [];
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    if (!n) {
        [n, k] = line.split(" ").map(Number);
    } else {
        inputList = line.split(" ").map(Number)
        rl.close();
    }
}).on("close", () => {
    mergeSort(inputList, 0, n - 1)
    console.log(swapCount)
    process.exit();
});