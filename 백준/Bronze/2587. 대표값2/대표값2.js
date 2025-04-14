const readline = require("readline");

const merge = (list, leftIndex, midIndex, rightIndex) => {
    let leftTargetIndex = leftIndex; // 왼쪽 정렬 리스트의 첫번째
    let rightTargetIndex = midIndex + 1; // 오른쪽 정렬 리스트의 첫번째

    const temp = []; // 정렬된 두 리스트를 합치기 위한 임시 리스트

    // 왼쪽 정렬 리스트나 오른쪽 정렬 리스트의 끝까지 반복
    while (leftTargetIndex <= midIndex && rightTargetIndex <= rightIndex) {
        // 더 작은쪽 값을 temp에 삽입하고 다음 요소로 이동
        if (list[leftTargetIndex] <= list[rightTargetIndex]) {
            temp.push(list[leftTargetIndex++]);
        } else {
            temp.push(list[rightTargetIndex++]);
        }
    }

    // while에서 끝까지 순회하지 못한 리스트가 있다면 나머지 값들을 temp에 순차 삽입
    if (leftTargetIndex <= midIndex) {
        for (let i = leftTargetIndex; i <= midIndex; i++) {
            temp.push(list[i]);
        }
    } else {
        for (let i = rightTargetIndex; i <= rightIndex; i++) {
            temp.push(list[i]);
        }
    }

    // 정렬된 temp를 원본 list에 반영
    for (let i = 0; i < temp.length; i++) {
        list[leftIndex + i] = temp[i];
    }
};

const mergeSort = (list, leftIndex, rightIndex) => {
    if (leftIndex >= rightIndex) {
        return;
    }

    const midIndex = parseInt((leftIndex + rightIndex) / 2); // 반으로 나누기 위한 중간 인덱스
    mergeSort(list, leftIndex, midIndex); // 왼쪽 리스트 정렬
    mergeSort(list, midIndex + 1, rightIndex); // 오른쪽 리스트 정렬
    merge(list, leftIndex, midIndex, rightIndex); // 각각 정렬된 왼쪽, 오른쪽 리스트 합침
};

const inputList = [];
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    inputList.push(Number(line));
    if (inputList.length === 5) {
        rl.close();
    }
}).on("close", () => {
    mergeSort(inputList, 0, inputList.length - 1);

    const total = inputList.reduce((sum, value) => sum + value, 0);
    console.log(total / inputList.length);
    console.log(inputList[parseInt(inputList.length / 2)]);

    process.exit();
});