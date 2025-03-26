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
}

const linkedList = new LinkedList();

linkedList.insert(0, 9);
linkedList.insert(1, 7);
linkedList.insert(2, 6);
linkedList.insert(3, 5);