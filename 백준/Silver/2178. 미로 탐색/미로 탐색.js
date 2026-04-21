const readline = require("readline");

let n, m;
const map = [];

const bfs = (startX, startY) => {
    const visited = Array.from({ length: n }, () => Array(m).fill(false));
    const queue = [[startX, startY]];
    const result = Array.from({ length: n }, () => Array(m).fill(0));

    visited[startX][startY] = true;
    result[startX][startY] = 1;

    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];

    let i = 0;
    while (i < queue.length) {
        const [x, y] = queue[i++];

        for (let i = 0; i < 4; i++) {
            const newX = x + dx[i];
            const newY = y + dy[i];

            if (newX < 0 || newX >= n || newY < 0 || newY >= m) {
                continue;
            }
            if (visited[newX][newY] || !map[newX][newY]) {
                continue;
            }

            visited[newX][newY] = true;
            result[newX][newY] = result[x][y] + 1;

            queue.push([newX, newY]);
        }
    }

    return result;
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    if (!n) {
        [n, m] = line.split(" ").map(Number);
    } else {
        map.push(line.split("").map(Number));

        if (map.length === n) {
            rl.close();
        }
    }
}).on("close", () => {
    console.log(bfs(0, 0)[n - 1][m - 1]);

    process.exit();
});