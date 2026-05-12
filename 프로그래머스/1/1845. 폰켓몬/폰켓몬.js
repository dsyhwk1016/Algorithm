function solution(nums) {
    const set = new Set(nums);
    return Math.min(nums.length / 2, set.size);
}