function solution(array, commands) {
    const result = [];

    for (const [i, j, k] of commands) {
        const partial = array.slice(i - 1, j).sort((a, b) => a - b);
        result.push(partial[k - 1]);
    }

    return result;
}