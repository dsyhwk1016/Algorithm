const readline = require("readline");

let n, m;
const graph = new Map();

const dfs = (start) => {
    const visited = new Set();
    const stack = [start];
    let count = 0;

    while (stack.length) {
        const node = stack.pop();
        if (visited.has(node)) {
            continue;
        }

        visited.add(node);
        count++;

        stack.push(...(graph.get(node) ?? []));
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
    } else if (!m) {
        m = Number(line);
    } else {
        const [n1, n2] = line.split(" ").map(Number);

        if (!graph.has(n1)) {
            graph.set(n1, []);
        }
        if (!graph.has(n2)) {
            graph.set(n2, []);
        }

        graph.get(n1).push(n2);
        graph.get(n2).push(n1);
        m--;

        if (!m) {
            rl.close();
        }
    }
}).on("close", () => {
    console.log(dfs(1) - 1);

    process.exit();
});