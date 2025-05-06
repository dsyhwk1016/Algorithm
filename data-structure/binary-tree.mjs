export class BinaryTree {
    constructor(data, left = null, right = null) {
        this.data = data
        this.leftSubTree = left
        this.rightSubTree = right
    }

    getData() {
        return this.data
    }

    setData(data) {
        this.data = data
    }

    getLeftSubTree() {
        return this.leftSubTree
    }

    getRightSubTree() {
        return this.rightSubTree
    }

    setLeftSubTree(tree) {
        this.leftSubTree = tree
    }

    setRightSubTree(tree) {
        this.rightSubTree = tree
    }
}