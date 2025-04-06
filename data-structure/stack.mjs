import { LinkedList } from "./linked-list.mjs";

// LIFO
export class Stack {
    constructor() {
        this.list = new LinkedList();
    }

    push(data) {
        this.list.insert(0, data); // O(1)
    }

    pop() {
        try {
            return this.list.delete(0); // O(1)
        } catch (error) {
            return null;
        }
    }

    peek() {
        return this.list.getNode(0); // O(1)
    }

    isEmpty() {
        return !this.list.count;
    }
}
