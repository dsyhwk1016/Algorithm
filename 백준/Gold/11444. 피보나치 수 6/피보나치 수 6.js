const readline = require("readline");

/**
 * F(4) = F(3) + F(2)
 *      = 2F(2) + F(1)
 *      = F(3)F(2) + F(2)F(1)
 *
 * F(5) = F(4) + F(3)
 *      = 2F(3) + F(2)
 *      = F(3)F(3) + F(2)F(2)
 *
 * F(6) = F(5) + F(4)
 *      = 2F(4) + F(3)
 *      = 3F(3) + 2F(2)
 *      = F(4)F(3) + F(3)F(2)
 *
 * F(7) = F(6) + F(5)
 *      = 2F(5) + F(4)
 *      = 3F(4) + 2F(3)
 *      = F(4)F(4) + F(3)F(3)
 *
 * F(2n+1) = F(n+1)^2 + F(n)^2
 * F(2n) = F(n+1)F(n) + F(n)F(n-1) = (F(n+1) + F(n-1))F(n) = (F(n) + 2F(n-1))F(n)
 */

const fibonacciResult = { 0n: 0n, 1n: 1n };
const fibonacci = (n) => {
    if (n <= 1n || fibonacciResult[n]) {
        return fibonacciResult[n];
    }

    const pivot = n / 2n;
    fibonacciResult[n] =
        n % 2n
            ? (fibonacci(pivot + 1n) ** 2n + fibonacci(pivot) ** 2n) %
              1000000007n
            : ((fibonacci(pivot) + fibonacci(pivot - 1n) * 2n) *
                  fibonacci(pivot)) %
              1000000007n;

    return fibonacciResult[n];
};

let n;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    n = BigInt(line);
    rl.close();
}).on("close", () => {
    console.log(fibonacci(n).toString());
    process.exit();
});