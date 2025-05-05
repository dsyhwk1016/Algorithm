const readline = require("readline");

let n;
const scoreList = [];
let minDiff = Number.MAX_VALUE;
let team;

const selectMember = (count, startIndex) => {
    if (count === parseInt(n / 2)) {
        let startTeam = 0;
        let linkTeam = 0;

        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                if (team[i] && team[j]) {
                    startTeam += scoreList[i][j] + scoreList[j][i];
                } else if (!team[i] && !team[j]) {
                    linkTeam += scoreList[i][j] + scoreList[j][i];
                }
            }
        }

        minDiff = Math.min(minDiff, Math.abs(startTeam - linkTeam));
        return;
    }

    for (let i = startIndex; i < n; i++) {
        if (team[i]) {
            continue;
        }

        team[i] = true;
        selectMember(count + 1, i + 1);
        team[i] = false;
    }
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    if (!n) {
        n = Number(line);
        team = new Array(n).fill(false);
    } else {
        scoreList.push(line.split(" ").map(Number));

        if (scoreList.length === n) {
            rl.close();
        }
    }
}).on("close", () => {
    selectMember(0, 0);
    console.log(minDiff);

    process.exit();
});