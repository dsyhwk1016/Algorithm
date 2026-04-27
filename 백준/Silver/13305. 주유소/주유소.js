const readline = require("readline");

let n;
let roadList;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    if (!n) {
        n = Number(line);
    } else if (!roadList?.length) {
        roadList = line.split(" ").map(distance => [BigInt(distance)]);
    } else {
        line.split(" ").slice(0, n - 1).forEach((price, index) => roadList[index].push(BigInt(price)));

        rl.close();
    }
}).on("close", () => {
    let totalPrice = 0n;
    let minPrice = BigInt(roadList[0][1]);
    for (const [distance, price] of roadList) {
        if (price < minPrice) {
            minPrice = price;
        }

        totalPrice += minPrice * distance;
    }
    console.log(totalPrice.toString());

    process.exit();
});