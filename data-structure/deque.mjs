import { DoubleLinkedList } from "./double-linked-list.mjs";

export class Deque {
    constructor() {
        this.list = new DoubleLinkedList();
    }

    printAll() {
        this.list.printAll();
    }

    addFirst(data) {
        this.list.insert(0, data); // O(1)
    }

    removeFirst() {
        try {
            return this.list.delete(0); // O(1)
        } catch (error) {
            return null;
        }
    }

    addLast(data) {
        this.list.insertLast(data); // O(1)
    }

    removeLast() {
        try {
            this.list.deleteLast(); // O(1)
        } catch (error) {
            return null;
        }
    }

    isEmpty() {
        return !this.list.count;
    }
}
