import { Component } from '@angular/core';
import { FizzBuzz } from "../classes/FizzBuzz";
import { BinarySearchTree } from "classes/binary-search-tree";

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
    myTree.printRootNode();
    console.log('Searching for a node,.... value: 4', myTree.findNode(myTree.root, 4));
    console.log('Current Height: ', myTree.getHeight(myTree.root));
    console.log(myTree.print('', myTree.root,true));
    //FizzBuzz.run();
  }
}
