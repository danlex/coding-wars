import { Component } from '@angular/core';
import { FizzBuzz } from "../classes/FizzBuzz";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';

  public Runner(): void {
    console.log('App Runner works.');
    let myTree = new BinarySearchTree().BuildFromArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    myTree.printTree();
    //FizzBuzz.run();
  }
}

class BinarySearchTree {
  public nodes = new Array<BinarySearchNode>();

  public printTree() {
    for (var i = 0; i < this.nodes.length; i++) {
      var element = this.nodes[i];
      console.log('Heres a node', element);
    }
  }

  public BuildFromArray(numbers: Array<number>): BinarySearchTree {
    numbers = numbers.sort();

    let middleIndex = Math.floor(numbers.length / 2);
    let middle = numbers[middleIndex];
    let middleNode: BinarySearchNode = {
      value: middle,
      left: this.GetNode(numbers.slice(0, middleIndex - 1)),
      right: this.GetNode(numbers.slice(middleIndex + 1, numbers.length - 1))
    }
    this.nodes.push(middleNode);
    return this;
  }

  public GetNode(numbers: Array<number>): BinarySearchNode {
    if (numbers.length === 3) {
      let middleNode: BinarySearchNode = {
        value: numbers[1],
        left: { value: numbers[0], left: null, right: null },
        right: { value: numbers[2], left: null, right: null }
      }
      return middleNode;
    }
    if (numbers.length === 2) {
        let middleNode: BinarySearchNode = {
          value: numbers[0],
          left: null,
          right: { value: numbers[1], right: null, left: null }
        };
        return middleNode;
    }
    if (numbers.length === 1) {
        let middleNode: BinarySearchNode = {
          value: numbers[0],
          left: null,
          right: null,
        };
        return middleNode;
    }
    else {
      let middleIndex = Math.floor(numbers.length / 2);
      let middle = numbers[middleIndex];
      let middleNode: BinarySearchNode = {
        value: middle,
        left: this.GetNode(numbers.slice(0, middleIndex - 1)),
        right: this.GetNode(numbers.slice(middleIndex + 1, numbers.length))
      }
      return middleNode;
    }
  }
}

class BinarySearchNode {
  public value;
  public left: BinarySearchNode;
  public right: BinarySearchNode;
}