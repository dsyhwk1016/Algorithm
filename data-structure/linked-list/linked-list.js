class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.header = null;
        this.count = 0;
    }

    insert(index, data) {
        if (index < 0 || index > this.count) {
            throw new Error("Invalid index");
        }

        const newNode = new Node(data);

        if (index === 0) {
            newNode.next = this.header;
            this.header = newNode;
        } else {
            let currentNode = this.header;
            for (let i = 1; i < index; i++) {
                currentNode = currentNode.next;
            }

            newNode.next = currentNode.next;
            currentNode.next = newNode;
        }
        this.count++;
    }

    insertLast(data) {
        this.insert(this.count, data);
    }

    getNode(index) {
        if (index < 0 || index >= this.count) {
            throw new Error("Invalid index");
        }

        let currentNode = this.header;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }

        return currentNode;
    }

    printAll() {
        let text = "";

        let currentNode = this.header;
        while (currentNode) {
            text += currentNode.next
                ? `${currentNode.data}, `
                : currentNode.data;
            currentNode = currentNode.next;
        }

        console.log(text);
    }

    delete(index) {
        if (index < 0 || index >= this.count) {
            throw new Error("Invalid index");
        }

        if (index === 0) {
            this.header = this.header.next;
        } else {
            let currentNode = this.header;
            for (let i = 1; i < index; i++) {
                currentNode = currentNode.next;
            }

            currentNode.next = currentNode.next.next;
        }
        this.count--;
    }

    deleteLast() {
        this.delete(this.count - 1);
    }

    clear() {
        this.header = null;
        this.count = 0;
    }
}

const linkedList = new LinkedList();

linkedList.insertLast(9);
linkedList.insertLast(8);
linkedList.insertLast(7);
linkedList.insertLast(6);
linkedList.insertLast(5);
linkedList.printAll();

linkedList.insert(2, 3);
linkedList.printAll();

// linkedList.clear();
// linkedList.printAll();

linkedList.delete(2);
linkedList.printAll();

linkedList.deleteLast();
linkedList.printAll();

console.log(linkedList.getNode(2));
console.log(linkedList.getNode(0));
