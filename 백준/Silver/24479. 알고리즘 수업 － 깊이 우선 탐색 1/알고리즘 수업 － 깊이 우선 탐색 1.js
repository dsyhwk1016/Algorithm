const readline = require("readline");

let n, m, r;
const graph = new Map();

const dfs = (start) => {
    const visited = Array(n).fill(0);
    const stack = [start];
    let count = 1;

    while (stack.length) {
        const node = stack.pop();
        if (visited[node - 1]) {
            continue;
        }

        visited[node - 1] = count++;
        stack.push(...(graph.get(node) ?? []).sort((a, b) => b - a));
    }

    return visited;
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    if (!n) {
        [n, m, r] = line.split(" ").map(Number);
    } else {
        const [u, v] = line.split(" ").map(Number);

        if (!graph.has(u)) {
            graph.set(u, []);
        }
        if (!graph.has(v)) {
            graph.set(v, []);
        }

        graph.get(u).push(v);
        graph.get(v).push(u);
        m--;

        if (!m) {
            rl.close();
        }
    }
}).on("close", () => {
    console.log(dfs(r).join("\n"));

    process.exit();
});