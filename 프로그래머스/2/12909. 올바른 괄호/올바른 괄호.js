function solution(s){
    let count = 0
    
    for(let i = 0; i < s.length; i++){
        if(s[i] === "("){
            count++
        }else {
            if(!count){
                return false
            }
            count--;
        }
    }
    
    return !count
}