function solution(clothes) {
    const map = clothes.reduce((result, [name, type]) => {
        if (result.has(type)) {
            result.get(type).push(name);
        } else {
            result.set(type, [name]);
        }

        return result;
    }, new Map());

    return Array.from(map.values()).reduce((result, list) => result * (list.length + 1), 1) - 1;
}