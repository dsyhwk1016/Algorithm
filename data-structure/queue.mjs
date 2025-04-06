import { DoubleLinkedList } from "./double-linked-list.mjs";

// FIFO
export class Queue {
    constructor() {
        this.list = new DoubleLinkedList();
    }

    enqueue(data) {
        this.list.insertLast(data); // O(1)
    }

    dequeue() {
        try {
            return this.list.delete(0); // O(1)
        } catch (error) {
            return null;
        }
    }

    front() {
        return this.list.header; // O(1)
    }

    isEmpty() {
        return !this.list.count;
    }
}
