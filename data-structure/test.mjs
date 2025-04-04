import { DoubleLinkedList } from "./double-linked-list.mjs";
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

    console.log(stack.isEmpty());
    console.log(stack.pop());

    stack.push(3);
    stack.push(1);
    stack.push(2);
    console.log(stack.pop());
    console.log(stack.isEmpty());

    console.log(stack.peek());
};
// testStack();

const testDoubleLinkedList = () => {
    const doubleLinkedList = new DoubleLinkedList();

    doubleLinkedList.insertLast(1);
    doubleLinkedList.insert(0, 0);
    doubleLinkedList.insertLast(2);
    doubleLinkedList.insert(1, 8);
    doubleLinkedList.insertLast(5);
    doubleLinkedList.printAll();

    // doubleLinkedList.clear();
    // doubleLinkedList.printAll();

    doubleLinkedList.delete(2);
    doubleLinkedList.printAll();

    doubleLinkedList.deleteLast();
    doubleLinkedList.printAll();

    console.log(doubleLinkedList.getNode(2));
    console.log(doubleLinkedList.getNode(0));
};
testDoubleLinkedList();
