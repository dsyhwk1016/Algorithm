const solution = (participant, completion) => {
    const map = new Map();

    for (let i = 0; i < participant.length; i++) {
        map.set(participant[i], (map.get(participant[i]) ?? 0) + 1);
        if (completion[i] !== undefined) {
            map.set(completion[i], (map.get(completion[i]) ?? 0) - 1);
        }
    }
    
    for(const [name, value] of map){
        if(value > 0){
            return name
        }
    }
    
    return
};