const readline = require("readline");

let count = { w: 0, b: 0 };

const divide = (len, list) => {
    if (list.length === 1) {
        if (list[0][0] === 1) {
            count.b++;
        } else {
            count.w++;
        }
        return;
    }

    if (list.flat().every((item) => item === 1)) {
        count.b++;
        return;
    } else if (list.flat().every((item) => item === 0)) {
        count.w++;
        return;
    } else {
        divide(
            len / 2,
            list.slice(0, len / 2).map((item) => item.slice(0, len / 2))
        );
        divide(
            len / 2,
            list.slice(len / 2, len).map((item) => item.slice(0, len / 2))
        );
        divide(
            len / 2,
            list.slice(0, len / 2).map((item) => item.slice(len / 2, len))
        );
        divide(
            len / 2,
            list.slice(len / 2, len).map((item) => item.slice(len / 2, len))
        );
    }
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
        inputList.push(line.split(" ").map(Number));
        if (inputList.length === n) {
            rl.close();
        }
    }
}).on("close", () => {
    divide(n, inputList);

    console.log(count.w);
    console.log(count.b);

    process.exit();
});