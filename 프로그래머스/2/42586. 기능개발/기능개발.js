function solution(progresses, speeds) {
    var answer = [];
    
    let prevEnd = Math.ceil((100-progresses[0])/speeds[0]);
    let count = 0;
    for(let i = 0; i < progresses.length; i++){
        const date = Math.ceil((100-progresses[i])/speeds[i])
        
        if(date <= prevEnd){
            count += 1;
        }else{
            answer.push(count);
            prevEnd = date;
            count = 1;
        }
    }
    answer.push(count)
    
    return answer;
}