import { LinkedList } from "./linked-list.mjs";
import { Stack } from "./stack.mjs";

const testLinkedList = () => {
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
};
// testLinkedList();

const testStack = () => {
    const stack = new Stack();

    console.log(stack.pop());
    stack.push(3);
    stack.push(1);
    stack.push(2);
    console.log(stack.pop());
};
testStack();
