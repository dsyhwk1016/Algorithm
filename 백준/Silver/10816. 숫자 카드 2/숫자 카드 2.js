const readline = require("readline");

let n;
let nList = [];
let m;
let mList = []

const lowerBound = (target) => {
    let lo = 0;
    let hi = n;

    while (lo < hi) {
        const mid = lo + Math.floor((hi - lo) / 2)

        if (nList[mid] < target) {
            lo = mid + 1
        } else {
            hi = mid
        }
    }

    return lo
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    if (!n) {
        n = Number(line)
    } else if (nList.length < n) {
        nList = line.split(" ").map(Number)
    } else if (!m) {
        m = Number(line)
    } else {
        mList = line.split(" ").map(Number)
        rl.close()
    }
}).on("close", () => {
    nList.sort((a, b) => a - b)
    console.log(mList.map(x => lowerBound(x + 1) - lowerBound(x)).join(" "))
    process.exit();
});