import { HashTable } from "./hash-table.mjs";

export class HashSet {
    constructor() {
        this.table = new HashTable();
    }

    add(data) {
        if (!this.table.get(data)) {
            this.table.set(data, data);
        }
    }

    isContain(data) {
        try {
            return !!this.table.get(data);
        } catch (error) {
            return false;
        }
    }

    remove(data) {
        return this.table.remove(data);
    }

    clear() {
        for (const hash of this.table.list) {
            hash.clear();
        }
    }

    isEmpty() {
        for (const hash of this.table.list) {
            if (hash.count) {
                return false;
            }
        }
        return true;
    }

    printAll() {
        for (const hash of this.table.list) {
            let currentNode = hash.header;
            while (currentNode) {
                console.log(currentNode.data.key);
                currentNode = currentNode.next;
            }
        }
    }
}
