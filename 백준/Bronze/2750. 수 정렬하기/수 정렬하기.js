const readline = require("readline");

const swap = (list, index1, index2) => {
    const temp = list[index1];
    list[index1] = list[index2];
    list[index2] = temp;
};

const divide = (list, leftIndex, rightIndex) => {
    const pivot = list[leftIndex]; // 첫번째 요소를 피벗으로 설정

    let leftTargetIndex = leftIndex + 1; // 피벗 다음 요소부터 정렬
    let rightTargetIndex = rightIndex;

    while (leftTargetIndex <= rightTargetIndex) {
        // rightTargetIndex을 넘지 않으면서 pivot보다 큰 값을 찾음
        while (
            leftTargetIndex <= rightTargetIndex &&
            list[leftTargetIndex] <= pivot
        ) {
            leftTargetIndex++;
        }
        // leftTargetIndex를 넘지 않으면서 pivot보다 작은 값을 찾음
        while (
            leftTargetIndex <= rightTargetIndex &&
            list[rightTargetIndex] >= pivot
        ) {
            rightTargetIndex--;
        }

        // leftTargetIndex와 rightTargetIndex가 교차되지 않았다면 두 값을 교환
        if (leftTargetIndex < rightTargetIndex) {
            swap(list, leftTargetIndex, rightTargetIndex);
        }
    }

    // leftTargetIndex와 rightTargetIndex가 교차되었다면(pivot을 제외한 모든 요소를 다 비교했다면) rightTargetIndex와 pivot 교환
    swap(list, leftIndex, rightTargetIndex);

    return rightTargetIndex;
};

const quickSort = (list, leftIndex, rightIndex) => {
    if (leftIndex >= rightIndex) {
        return;
    }

    const pivotIndex = divide(list, leftIndex, rightIndex); // 피봇 위치 결정
    quickSort(list, leftIndex, pivotIndex - 1); // 피봇보다 작은 요소들 정렬
    quickSort(list, pivotIndex + 1, rightIndex); // 피봇보다 큰 요소들 정렬
};

let n;
const inputList = [];
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    if (!n) {
        n = Number(line);
    } else {
        inputList.push(Number(line));
        if (inputList.length === n) {
            rl.close();
        }
    }
}).on("close", () => {
    quickSort(inputList, 0, n - 1);
    console.log(inputList.join("\n"));

    process.exit();
});