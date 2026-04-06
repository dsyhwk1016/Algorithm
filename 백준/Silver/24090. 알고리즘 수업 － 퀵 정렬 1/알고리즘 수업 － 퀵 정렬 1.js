const readline = require("readline");

let swapCount = 0;

const quick_sort = (list, leftIndex, rightIndex) => {
    if (leftIndex < rightIndex) {
        const pivotIndex = partition(list, leftIndex, rightIndex);
        quick_sort(list, leftIndex, pivotIndex - 1);
        quick_sort(list, pivotIndex + 1, rightIndex);
    }
}

const partition = (list, leftIndex, rightIndex) => {
    const pivot = list[rightIndex]
    let i = leftIndex - 1;

    for (let j = leftIndex; j < rightIndex; j++) {
        if (list[j] <= pivot) {
            i += 1;
            swapCount += 1;
            [list[i], list[j]] = [list[j], list[i]]

            if (swapCount === k) {
                console.log(list[i], list[j])
                process.exit();
            }
        }
    }

    if (i + 1 != rightIndex) {
        swapCount += 1;
        [list[i + 1], list[rightIndex]] = [list[rightIndex], list[i + 1]];

        if (swapCount === k) {
            console.log(list[i + 1], list[rightIndex])
            process.exit();
        }
    }

    return i + 1;
}

let n;
let k;
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
    quick_sort(inputList, 0, n - 1)
    console.log(-1)
    process.exit();
});