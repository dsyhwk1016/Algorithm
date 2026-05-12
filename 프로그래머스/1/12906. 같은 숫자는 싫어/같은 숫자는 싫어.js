function solution(arr) {
    const result = [arr[0]];
    
    for(let i = 1; i < arr.length; i++){
        if(result[result.length-1] !== arr[i]){
            result.push(arr[i])
        }
    }
    
    return result
}