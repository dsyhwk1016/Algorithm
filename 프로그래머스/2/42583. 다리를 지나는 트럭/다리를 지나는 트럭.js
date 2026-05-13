function solution(bridge_length, weight, truck_weights) {
    const queue = Array(bridge_length).fill(0);
    queue[bridge_length - 1] = truck_weights[0];
    let totalWeight = truck_weights[0];
    let sec = 1;

    let i = 1;
    while (totalWeight > 0) {
        totalWeight -= queue.shift();
        sec++;

        const truck = truck_weights[i];
        if (totalWeight + truck <= weight) {
            queue.push(truck);
            totalWeight += truck;
            i++;
        } else {
            queue.push(0);
        }
    }

    return sec;
}