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
        roadList = line.split(" ").map(distance => [Number(distance)]);
    } else {
        line.split(" ").slice(0, n - 1).forEach((price, index) => roadList[index].push(Number(price)));

        rl.close();
    }
}).on("close", () => {
    let totalPrice = 0;
    let minPrice = roadList[0][1];
    let totalDistance = 0;//roadList[0][0];
    for (const [distance, price] of roadList) {
        if (price < minPrice) {
            totalPrice += minPrice * totalDistance;
            totalDistance = distance;
            minPrice = price;
            continue;
        }

        totalDistance += distance;
    }
    totalPrice += minPrice * totalDistance;

    console.log(totalPrice);

    process.exit();
});