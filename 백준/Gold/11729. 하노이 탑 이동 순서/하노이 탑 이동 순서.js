const readline = require("readline");

let total;    // 원판의 개수
let count = 0;
const history = [];
const hanoi = ({number, start, end, temp}) => {
    if(number < 1){
        return;
    }
    
    // 대상 원판 위쪽 원판들을 temp로 옮김
    hanoi({number: number-1, start, end: temp, temp: end});
    history.push(`${start} ${end}`);
    
    // temp로 옮긴 원판들을 다시 end로 옮김
    hanoi({number: number-1, start: temp, end, temp: start});
    count++;
}

const rl = readline.createInterface({input: process.stdin, output: process.stdout});
rl.on("line", (n)=>{
    total = Number(n);
    rl.close();
}).on("close", ()=>{
    hanoi({number: total, start: 1, end: 3, temp: 2});
    
    console.log(count);
    console.log(history.join("\n"));
    
    process.exit();
})