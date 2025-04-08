import { DoubleLinkedList } from "./double-linked-list.mjs";

class HashData {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}

export class HashTable {
    constructor() {
        // 각 index에 빈 이중연결리스트 할당
        this.list = [];
        for (let i = 0; i < 10; i++) {
            this.list[i] = new DoubleLinkedList();
        }
    }

    hashFunction(number) {
        return number % 10;
    }

    set(key, value) {
        this.list[this.hashFunction(key)].insertLast(new HashData(key, value));
    }

    get(key) {
        let currentNode = this.list[this.hashFunction(key)].header;
        while (currentNode) {
            if (currentNode.data.key === key) {
                return currentNode.data.value;
            }
            currentNode = currentNode.next;
        }
        return null;
    }

    remove(key) {
        const indexList = this.list[this.hashFunction(key)];
        let currentNode = indexList.header;
        let deleteIndex = 0;
        while (currentNode) {
            if (currentNode.data.key === key) {
                return indexList.delete(deleteIndex);
            }
            currentNode = currentNode.next;
            deleteIndex++;
        }
        return null;
    }
}
