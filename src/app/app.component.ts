import { Component } from '@angular/core';
import { CocktailSort } from '../classes/cocktail-sort';
import { RandomGenerator } from '../classes/random-generator';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';

  public Runner(): void {
    console.log('App Runner works.');
    let array = RandomGenerator.GenerateArray(10);
    console.log(array);
    CocktailSort.sort<number>(array);
    console.log(array);
  }
}
