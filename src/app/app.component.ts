import { Component } from '@angular/core';
import { SufixTree } from '../classes/sufix-tree';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';

  public Runner(): void {
    console.log('App Runner works.');
    const str = 'ABABABA';
    console.log(str);
    const sufixTree = new SufixTree(str);
    console.log(sufixTree.print());
    console.log(sufixTree.freqSubstr());
  }
}
