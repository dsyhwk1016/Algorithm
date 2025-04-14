const list = [3, 5, 2, 4, 6, 1, 8, 7];
console.log(list);

// 버블 정렬 O(n^2)
const bubbleSort = (list) => {
    // 정렬 완료된 개수
    for (let i = 0; i < list.length; i++) {
        // 첫번째 인덱스부터 정렬되지 않은 마지막 인덱스까지 비교
        for (let j = 0; j < list.length - i - 1; j++) {
            if (list[j] > list[j + 1]) {
                const temp = list[j];
                list[j] = list[j + 1];
                list[j + 1] = temp;
            }
        }
    }
};
// bubbleSort(list);

// 선택 정렬 O(n^2)
const selectionSort = (list) => {
    for (let i = 0; i < list.length; i++) {
        let minIndex = i; // 정렬되지 않은 첫번째 인덱스

        // 정렬되지 않은 요소들 중 가장 작은 값을 찾음
        for (let j = i; j < list.length; j++) {
            if (list[j] < list[minIndex]) {
                minIndex = j;
            }
        }

        let temp = list[i];
        list[i] = list[minIndex];
        list[minIndex] = temp;
    }
};
selectionSort(list);

console.log(list);
