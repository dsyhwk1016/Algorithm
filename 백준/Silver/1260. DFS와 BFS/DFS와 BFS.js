const readline = require("readline");

let n, m, v;
const graph = new Map();

const dfs = (start) => {
    const visited = new Set();
    const stack = [start];
    const result = [];

    while (stack.length) {
        const node = stack.pop();
        if (visited.has(node)) continue;

        visited.add(node);
        result.push(node);

        graph.get(node).sort((a, b) => b - a).map(child => stack.push(child));
    }

    console.log(result.join(" "));
    return;
};

const bfs = (start) => {
    const visited = new Set();
    const queue = [start];
    const result = [];

    let i = 0;
    while (i < queue.length) {
        const node = queue[i++];
        if (visited.has(node)) continue;

        visited.add(node);
        result.push(node);

        graph.get(node).sort((a, b) => a - b).map(child => queue.push(child));
    }

    console.log(result.join(" "));
    return;
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    if (!n) {
        [n, m, v] = line.split(" ").map(Number);

        for (let i = 1; i <= n; i++) {
            graph.set(i, []);
        }
    } else {
        const [node1, node2] = line.split(" ").map(Number);

        graph.get(node1).push(node2);
        graph.get(node2).push(node1);
        m--;

        if (!m) {
            rl.close();
        }
    }
}).on("close", () => {
    dfs(v);
    bfs(v);

    process.exit();
});