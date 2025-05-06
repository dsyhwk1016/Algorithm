export class BinaryTree {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.leftSubTree = left;
        this.rightSubTree = right;
    }

    getData() {
        return this.data;
    }

    setData(data) {
        this.data = data;
    }

    getLeftSubTree() {
        return this.leftSubTree;
    }

    getRightSubTree() {
        return this.rightSubTree;
    }

    setLeftSubTree(tree) {
        this.leftSubTree = tree;
    }

    setRightSubTree(tree) {
        this.rightSubTree = tree;
    }

    preOrderTraversal(tree) {
        console.log(tree.getData());

        const leftSubTree = tree.getLeftSubTree();
        const rightSubTree = tree.getRightSubTree();

        if (leftSubTree) {
            this.preOrderTraversal(leftSubTree);
        }
        if (rightSubTree) {
            this.preOrderTraversal(rightSubTree);
        }
    }

    inOrderTraversal(tree) {
        const leftSubTree = tree.getLeftSubTree();
        const rightSubTree = tree.getRightSubTree();

        if (leftSubTree) {
            this.inOrderTraversal(leftSubTree);
        }
        console.log(tree.getData());
        if (rightSubTree) {
            this.inOrderTraversal(rightSubTree);
        }
    }

    postOrderTraversal(tree) {
        const leftSubTree = tree.getLeftSubTree();
        const rightSubTree = tree.getRightSubTree();

        if (leftSubTree) {
            this.postOrderTraversal(leftSubTree);
        }
        if (rightSubTree) {
            this.postOrderTraversal(rightSubTree);
        }
        console.log(tree.getData());
    }
}