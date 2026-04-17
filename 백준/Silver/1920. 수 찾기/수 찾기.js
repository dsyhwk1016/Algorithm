const readline = require("readline");

let n;
let AList = [];
let m;
let XList = []

const binarySearch = (target) => {
    let lo = 0;
    let hi = n;


    while (lo <= hi) {
        const mid = lo + Math.floor((hi - lo) / 2);

        if (AList[mid] === target) {
            console.log(1)
            return;
        } else if (AList[mid] < target) {
            lo = mid + 1
        } else {
            hi = mid - 1
        }
    }

    console.log(0);
    return
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    if (!n) {
        n = Number(line)
    } else if (AList.length < n) {
        AList = line.split(" ").map(Number)
    } else if (!m) {
        m = Number(line)
    } else {
        XList = line.split(" ").map(Number)
        rl.close()
    }
}).on("close", () => {
    AList.sort((a, b) => a - b)
    XList.map(x => binarySearch(x))
    process.exit();
});