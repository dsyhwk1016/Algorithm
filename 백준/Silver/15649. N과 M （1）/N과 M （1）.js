const readline = require("readline");

const selectNumber = (selectList, checkList, n, m) => {
    for (let i = 1; i <= n; i++) {
        if (!checkList[i]) {
            checkList[i] = true;
            selectList.push(i);

            if (selectList.length === m) {
                console.log(selectList.join(" "));
            } else {
                selectNumber(selectList, checkList, n, m);
            }
            selectList.pop();
            checkList[i] = false;
        }
    }
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    const [n, m] = line.split(" ").map(Number);

    const selectList = [];
    const checkList = new Array(n + 1).fill(false);
    selectNumber(selectList, checkList, n, m);

    rl.close();
}).on("close", () => {
    process.exit();
});