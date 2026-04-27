const readline = require("readline");

let n;
let meetingList = [];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    if (!n) {
        n = Number(line);
    } else {
        meetingList.push(line.split(" ").map(Number));

        if (meetingList.length === n) {
            rl.close();
        }
    }
}).on("close", () => {
    meetingList.sort((a, b) => a[0] - b[0]).sort((a, b) => a[1] - b[1]);

    let total = 0;
    let currEnd = 0;
    for (const meeting of meetingList) {
        if (meeting[0] >= currEnd) {
            currEnd = meeting[1];
            total++;
        }
    }
    console.log(total);

    process.exit();
});