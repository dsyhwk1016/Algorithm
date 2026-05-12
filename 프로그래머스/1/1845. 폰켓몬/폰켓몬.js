function solution(nums) {
    const map = new Map();
    nums.forEach(num => map.set(num, (map.get(num) ?? 0) + 1));

    return Math.min(nums.length / 2, map.size);
}