const readline = require("readline");

const selectNumber = (selectList, startNum, n, m) => {
    if (startNum > n) {
        return;
    }

    for (let i = startNum; i <= n; i++) {
        selectList.push(i);

        if (selectList.length === m) {
            console.log(selectList.join(" "));
        } else {
            selectNumber(selectList, i + 1, n, m);
        }
        selectList.pop();
    }
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    const [n, m] = line.split(" ").map(Number);

    const selectList = [];
    selectNumber(selectList, 1, n, m);

    rl.close();
}).on("close", () => {
    process.exit();
});