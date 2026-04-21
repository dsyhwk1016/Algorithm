const readline = require("readline");

let n;
const map = [];

const countHome = (startX, startY) => {
    let count = 1;
    const queue = [[startX, startY]];

    const direction = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    let i = 0;
    while (i < queue.length) {
        const [x, y] = queue[i++];

        for (const [dx, dy] of direction) {
            const newX = x + dx;
            const newY = y + dy;

            if (newX < 0 || newX >= n || newY < 0 || newY >= n) {
                continue;
            }
            if (!map[newX][newY]) {
                continue;
            }

            map[newX][newY] = 0;
            count++;
            queue.push([newX, newY]);
        }
    }

    return count;
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    if (!n) {
        n = Number(line);
    } else {
        map.push(line.split("").map(Number));
        if (map.length === n) {
            rl.close();
        }
    }
}).on("close", () => {
    let total = 0;
    const homeList = [];

    for (let x = 0; x < n; x++) {
        for (let y = 0; y < n; y++) {
            if (map[x][y]) {
                total++;
                map[x][y] = 0;
                homeList.push(countHome(x, y));
            }
        }
    }

    console.log(total);
    console.log(homeList.sort((a, b) => a - b).join("\n"));

    process.exit();
});