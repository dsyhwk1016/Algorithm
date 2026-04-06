const readline = require("readline");

let n;
const inputList = [];
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    if (!n) {
        n = Number(line);
    } else {
        const [age, name] = line.split(" ")
        inputList.push({ age: Number(age), name });
        if (inputList.length === n) {
            rl.close();
        }
    }
}).on("close", () => {
    console.log(inputList.sort((a, b) => a.age - b.age).map(({ age, name }) => `${age} ${name}`).join("\n"));

    process.exit();
});