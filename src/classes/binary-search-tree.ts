
import { Queue } from "classes/queue";

export class BinarySearchTree {
  public root: BinarySearchNode;

  public print(prefix: string, root:BinarySearchNode, isLeft: boolean){
    if(root != null){
      console.log(prefix + (isLeft ? '|--' : '\\-- ') + root.value);
      this.print(prefix + (isLeft ? '|   ' : '     '), root.left, true);
      this.print(prefix + (isLeft ? '|   ' : '     '), root.right, false);
    }
  }

  public getHeight(root: BinarySearchNode): number {
    if (!root.right && !root.left) {
      return 1;
    }
    return 1 + Math.max(root.right ? 
                        this.getHeight(root.right) : 0, 
                        root.left ? 
                        this.getHeight(root.left): 0
                        );
  }

  public BreadthFirstSearch(root: BinarySearchNode, value: number): BinarySearchNode{
    let treeNodesQueue = new Queue<BinarySearchNode>();
    treeNodesQueue.enqueue(root)

    while(!treeNodesQueue.isEmpty()){
      let currentNode = treeNodesQueue.dequeue();
      if(currentNode.value === value){
        return currentNode;
      }

      if(currentNode.left){
        treeNodesQueue.enqueue(currentNode.left);
      }
      if(currentNode.right){
        treeNodesQueue.enqueue(currentNode.right);
      }
    }
    return null;
  }

  public findNode(root: BinarySearchNode, value: number): BinarySearchNode {
    console.log('Executing search operation');
    if (root.value === value) {
      return root;
    }
    if (value > root.value) {
      return this.findNode(root.right, value);
    }
    if (value < root.value) {
      return this.findNode(root.left, value);
    }
    return null;
  }

  public printWholeTree(root: BinarySearchNode): void {
    let printedArrows = false;
    console.log('value: ', root.value);
    if (root.left && root.right) {
      console.log('/  \\');
      printedArrows = true;
    }
    if (root.left) {
      if (!printedArrows) {
        console.log('/');
      }
      this.printWholeTree(root.left);
    }
    if (root.right) {
      if (!printedArrows) {
        console.log('\\');
      }
      this.printWholeTree(root.right);
    }
  }

  public printRootNode() {
    console.log('Heres the root', this.root);
  }

  public insert(node: BinarySearchNode, value: number): BinarySearchNode {
    //If it's greater than, we insert the node on the right.
   
    if (value > node.value && node.right === null) {
      node.right = {
        value: value,
        right: null,
        left: null
      }
      return node.right;
    }
    //If it's less than, we insert a node on the left
    if (value < node.value && node.left === null) {
      node.left = {
        value: value,
        right: null,
        left: null
      }
      return node.left;
    }
    // It's greater than the value, but the right node isn't null move to the right
    if (value > node.value) {
      return this.insert(node.right, value);
    }
    if (value < node.value) {
      return this.insert(node.left, value);
    }
  }

  public BuildFromArray(numbers: Array<number>): BinarySearchTree {
    numbers = numbers.sort();
    //insert the root node first
    let middleIndex = Math.floor(numbers.length / 2);
    let rootNode: BinarySearchNode = {
      value: numbers[middleIndex],
      right: null,
      left: null,
    }
    // We already inserted the root node, 
    let currentNode = rootNode;
    // process the left hand side
    for (var i = 0; i < Math.floor(numbers.length / 2); i++) {
      var element = numbers[i];
      currentNode = this.insert(currentNode, element);
    }

    currentNode = rootNode; // reset back up to the root node

    // process the right hand side. 
    for (var j = Math.floor(numbers.length / 2) + 1; j < numbers.length; j++) {
      var element = numbers[j];
      currentNode = this.insert(currentNode, element);
    }
    this.root = rootNode;
    return this;
  }
}

class BinarySearchNode {
  public value;
  public left: BinarySearchNode;
  public right: BinarySearchNode;
}