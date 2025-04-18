const readline = require("readline");

const temp = { "0 0 0": 1 };
const w = (a, b, c) => {
    if (a <= 0 || b <= 0 || c <= 0) {
        return temp["0 0 0"];
    } else if (a > 20 || b > 20 || c > 20) {
        if (temp["20 20 20"]) {
            return temp["20 20 20"];
        } else {
            temp["20 20 20"] = w(20, 20, 20);
            return temp["20 20 20"];
        }
    }

    if (temp[`${a} ${b} ${c}`]) {
        return temp[`${a} ${b} ${c}`];
    } else {
        if (a < b && b < c) {
            temp[`${a} ${b} ${c}`] =
                w(a, b, c - 1) + w(a, b - 1, c - 1) - w(a, b - 1, c);
        } else {
            temp[`${a} ${b} ${c}`] =
                w(a - 1, b, c) +
                w(a - 1, b - 1, c) +
                w(a - 1, b, c - 1) -
                w(a - 1, b - 1, c - 1);
        }

        return temp[`${a} ${b} ${c}`];
    }
};

const inputList = [];
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    if (line === "-1 -1 -1") {
        rl.close();
    } else {
        inputList.push(line.split(" ").map(Number));
    }
}).on("close", () => {
    inputList.map((data) =>
        console.log(
            `w(${data[0]}, ${data[1]}, ${data[2]}) = ${w(
                data[0],
                data[1],
                data[2]
            )}`
        )
    );

    process.exit();
});