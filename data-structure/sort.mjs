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
// selectionSort(list);

// 삽입 정렬 O(n^2)
const insertSort = (list) => {
    // 0번 인덱스는 정렬되어있다고 가정
    for (let i = 1; i < list.length; i++) {
        const targetValue = list[i];

        // 정렬된 영역의 뒤에서부터 비교
        for (let j = i; j >= 0; j--) {
            if (list[j - 1] > targetValue) {
                list[j] = list[j - 1];
            } else {
                list[j] = targetValue;
                break;
            }
        }
    }
};
// insertSort(list);

// 병합 정렬 O(nlogn)
const merge = (list, leftIndex, midIndex, rightIndex) => {
    let leftTargetIndex = leftIndex;
    let rightTargetIndex = midIndex + 1;
    const temp = [];

    while (leftTargetIndex <= midIndex && rightTargetIndex <= rightIndex) {
        if (list[leftTargetIndex] < list[rightTargetIndex]) {
            temp.push(list[leftTargetIndex++]);
        } else {
            temp.push(list[rightTargetIndex++]);
        }
    }

    if (leftTargetIndex <= midIndex) {
        for (let i = leftTargetIndex; i <= midIndex; i++) {
            temp.push(list[i]);
        }
    } else {
        for (let i = rightTargetIndex; i <= rightIndex; i++) {
            temp.push(list[i]);
        }
    }

    for (let i = 0; i < temp.length; i++) {
        list[leftIndex + i] = temp[i];
    }
};

const mergeSort = (list, leftIndex, rightIndex) => {
    if (leftIndex >= rightIndex) {
        return;
    }

    const midIndex = Math.floor((leftIndex + rightIndex) / 2);
    mergeSort(list, leftIndex, midIndex);
    mergeSort(list, midIndex + 1, rightIndex);
    merge(list, leftIndex, midIndex, rightIndex);
};
mergeSort(list, 0, list.length - 1);

console.log(list);
