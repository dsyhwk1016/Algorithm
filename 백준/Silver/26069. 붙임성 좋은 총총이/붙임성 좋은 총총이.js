const readline = require("readline");

let n;
let inputCount = 0;
const userList = new Set(["ChongChong"]);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    if (!n) {
        n = Number(line);
    } else {
        inputCount++;

        const [user1, user2] = line.split(" ");
        if (userList.has(user1)) {
            userList.add(user2);
        } else if (userList.has(user2)) {
            userList.add(user1);
        }

        if (inputCount === n) {
            console.log(userList.size);
            rl.close();
        }
    }
}).on("close", () => {
    process.exit();
});