import { LinkedList } from "./linked-list.mjs";

export class Stack {
    constructor() {
        this.list = new LinkedList();
    }

    push(data) {
        this.list.insert(0, data);
    }

    pop() {
        try {
            return this.list.delete(0);
        } catch (error) {
            return null;
        }
    }

    peek() {
        return this.list.getNode(0);
    }

    isEmpty() {
        return !this.list.count;
    }
}
