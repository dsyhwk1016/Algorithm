const readline = require("readline");

let n;
let inputCount = 0;
let count = 0;
const userList = new Set();
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    if (!n) {
        n = Number(line);
    } else {
        inputCount++;

        if (line === "ENTER") {
            count += userList.size;
            userList.clear();
        } else {
            userList.add(line);
        }

        if (inputCount === n) {
            console.log(count + userList.size);
            rl.close();
        }
    }
}).on("close", () => {
    process.exit();
});