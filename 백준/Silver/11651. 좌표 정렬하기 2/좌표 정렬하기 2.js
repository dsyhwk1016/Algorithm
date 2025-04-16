const readline = require("readline");

const merge = (list, leftIndex, midIndex, rightIndex) => {
    let left = leftIndex;
    let right = midIndex + 1;

    const temp = [];

    while (left <= midIndex && right <= rightIndex) {
        if (
            list[left].y < list[right].y ||
            (list[left].y === list[right].y && list[left].x <= list[right].x)
        ) {
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
    }
};

const sortCoordinate = (list, leftIndex, rightIndex) => {
    if (leftIndex >= rightIndex) {
        return;
    }

    const midIndex = parseInt((leftIndex + rightIndex) / 2);
    sortCoordinate(list, leftIndex, midIndex);
    sortCoordinate(list, midIndex + 1, rightIndex);
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
        const [x, y] = line.split(" ").map(Number);
        inputList.push({ x, y });

        if (inputList.length === n) {
            rl.close();
        }
    }
}).on("close", () => {
    sortCoordinate(inputList, 0, n - 1);
    inputList.map((data) => console.log(data.x, data.y));

    process.exit();
});
