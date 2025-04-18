const readline = require("readline");

const temp = {};
const rgb = (list, targetIndex, excludeColor) => {
    const key = `${targetIndex} ${excludeColor}`;
    if (temp[key]) {
        return temp[key];
    }

    const targetPrice = list[targetIndex];
    let selectR = targetPrice.r;
    let selectG = targetPrice.g;
    let selectB = targetPrice.b;

    if (targetIndex >= 1) {
        selectR = targetPrice.r + rgb(list, targetIndex - 1, "r");
        selectG = targetPrice.g + rgb(list, targetIndex - 1, "g");
        selectB = targetPrice.b + rgb(list, targetIndex - 1, "b");
    }

    switch (excludeColor) {
        case "r":
            temp[key] = Math.min(selectG, selectB);
            break;
        case "g":
            temp[key] = Math.min(selectR, selectB);
            break;
        case "b":
            temp[key] = Math.min(selectR, selectG);
            break;
        default:
            temp[key] = Math.min(selectR, selectG, selectB);
            break;
    }
    return temp[key];
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
        const [r, g, b] = line.split(" ").map(Number);
        inputList.push({ r, g, b });
        if (inputList.length === n) {
            rl.close();
        }
    }
}).on("close", () => {
    const price = rgb(inputList, n - 1);
    console.log(price);
    process.exit();
});