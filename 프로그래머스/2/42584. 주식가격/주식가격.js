function solution(prices) {
    const result = Array(prices.length).fill(0);

    for (let i = 0; i < prices.length - 1; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[j] < prices[i]) {
                result[i] = j - i;
                break;
            }
        }

        if (!result[i]) {
            result[i] = prices.length - i - 1;
        }
    }

    return result;
}