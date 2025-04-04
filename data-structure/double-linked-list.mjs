import { LinkedList, Node } from "./linked-list.mjs";

class DoubleNode extends Node {
    constructor(data, next = null, prev = null) {
        super(data, next);
        this.prev = prev;
    }
}

export class DoubleLinkedList extends LinkedList {
    constructor() {
        super();
        this.tail = null;
    }

    insert(index, data) {
        if (index < 0 || index > this.count) {
            throw new Error("Invalid index");
        }

        const newNode = new DoubleNode(data);

        if (index === 0) {
            // 첫번째에 노드 삽입: O(1)
            newNode.next = this.header;
            this.header = newNode;
        } else if (index === this.count) {
            // 마지막에 노드 삽입: O(1)
            newNode.prev = this.tail;
            newNode.prev.next = newNode;
        } else {
            // 중간에 노드 삽입: O(n)
            let currentNode = this.header;
            for (let i = 1; i < index; i++) {
                currentNode = currentNode.next;
            }

            newNode.next = currentNode.next;
            newNode.prev = currentNode;
            currentNode.next = newNode;
        }

        if (newNode.next) {
            newNode.next.prev = newNode;
        } else {
            this.tail = newNode;
        }

        this.count++;
    }

    delete(index) {
        if (index < 0 || index >= this.count) {
            throw new Error("Invalid index");
        }

        let deleteNode;
        if (index === 0) {
            // 첫번째 노드 삭제: O(1)
            deleteNode = this.header;
            this.header = deleteNode.next;
            if (this.header) {
                this.header.prev = null;
            } else {
                this.tail = null;
            }
        } else if (index === this.count - 1) {
            // 마지막 노드 삭제: O(1)
            deleteNode = this.tail;
            this.tail = deleteNode.prev;
            this.tail.next = null;
        } else {
            // 중간 노드 삭제: O(n)
            let currentNode = this.header;
            for (let i = 0; i < index; i++) {
                currentNode = currentNode.next;
            }

            deleteNode = currentNode;
            currentNode.prev.next = currentNode.next;
            currentNode.next.prev = currentNode.prev;
        }

        this.count--;

        return deleteNode;
    }
}
