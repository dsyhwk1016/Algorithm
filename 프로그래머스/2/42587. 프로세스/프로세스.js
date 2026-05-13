function solution(priorities, location) {
    const queue = priorities.map((priority, index) => [index, priority]);
    let maxPriority = Math.max(...priorities);

    let count = 0;
    for (const [index, priority] of queue) {
        if (priority === maxPriority) {
            count++;
            if (index === location) {
                return count;
            }
            priorities[index] = 0;
            maxPriority = Math.max(...priorities);
        } else {
            queue.push([index, priority]);
        }
    }

    return count;
}