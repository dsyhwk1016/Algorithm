const readline = require("readline");

const selectNumber = (selectList, startNum, n, m, result) => {
    if (selectList.length === m) {
        return result + `${selectList.join(" ")}\n`;
    }

    for (let i = startNum; i <= n; i++) {
        selectList.push(i);
        result = selectNumber(selectList, i, n, m, result);
        selectList.pop();
    }

    return result;
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    const [n, m] = line.split(" ").map(Number);

    const selectList = [];
    let result = selectNumber(selectList, 1, n, m, "");
    console.log(result);

    rl.close();
}).on("close", () => {
    process.exit();
});