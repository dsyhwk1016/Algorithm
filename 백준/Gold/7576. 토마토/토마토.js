const readline = require("readline");

let m, n;
const tomatoList = [];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    if (!m) {
        [m, n] = line.split(" ").map(Number);
    } else {
        tomatoList.push(line.split(" ").map(Number));

        if (tomatoList.length === n) {
            rl.close();
        }
    }
}).on("close", () => {
    const queue = [];
    const result = Array.from({ length: n }, () => Array(m).fill(-1));

    for (let x = 0; x < n; x++) {
        for (let y = 0; y < m; y++) {
            if (tomatoList[x][y] === 1) {
                queue.push([x, y]);
                result[x][y] = 0;
            } else if (tomatoList[x][y] === -1) {
                result[x][y] = 0;
            }
        }
    }

    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    let i = 0;
    while (i < queue.length) {
        const [x, y] = queue[i++];

        for (const [dx, dy] of directions) {
            const newX = x + dx;
            const newY = y + dy;

            if (newX < 0 || newX >= n || newY < 0 || newY >= m) {
                continue;
            }
            if (result[newX][newY] >= 0) {
                continue;
            }

            result[newX][newY] = result[x][y] + 1;
            queue.push([newX, newY]);
        }
    }

    const flatMinDays = result.flat();
    if (Math.min(...flatMinDays) === -1) {
        console.log(-1);
    } else {
        console.log(Math.max(...flatMinDays));
    }

    process.exit();
});