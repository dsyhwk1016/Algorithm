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
            newNode.next = this.header;
            if (newNode.next) {
                newNode.next.prev = newNode;
            } else {
                this.tail = newNode;
            }
            this.header = newNode;
        } else {
            let currentNode = this.header;
            for (let i = 1; i < index; i++) {
                currentNode = currentNode.next;
            }

            newNode.next = currentNode.next;
            newNode.prev = currentNode;
            if (newNode.next) {
                newNode.next.prev = newNode;
            } else {
                this.tail = newNode;
            }
            currentNode.next = newNode;
        }
        this.count++;
    }
}
