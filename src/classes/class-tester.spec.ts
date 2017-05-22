import { TestBed, async } from '@angular/core/testing';

import { PrimeNumbers } from './prime-numbers';
import { Queue } from "classes/queue";
import { Permutation } from "classes/all-permutations";
import { CocktailSort } from "classes/cocktail-sort";
import { RandomGenerator } from "classes/random-generator";
import { BubbleSort } from "classes/bubble-sort";
import { InsertionSort } from "classes/insertion-sort";

describe('class tester', () => {
  // it('should print the prime numbers from 0 - 100', () => {
  //   PrimeNumbers.PrintPrimeNumbers(101);
  // });

  it('Should Properly exercise the queue', () => {
    let myQ = new Queue();
    myQ.enqueue(5);
    myQ.enqueue(6);
    myQ.enqueue(45);
    myQ.printQueue();
    myQ.dequeue();
    myQ.printQueue();
    let peekedValue = myQ.peek();
    console.log('About to deque: ', myQ.peek());
    expect(peekedValue).toEqual(myQ.dequeue());
  });

  it('Permute a string', () => {
    let permutations = Permutation.permute('abcd');
    console.log('Permutations: ', Object.keys(permutations).sort());
  });

  it('Sort an Array with cocktail sort', () => {
    let sorted = CocktailSort.sort([2143,12,8888,25,63,67,23,6,9])
    console.log('Sorted: ',sorted);
  });

  it('Sort an Array with cocktail Timing', () => {


    let unsorted = RandomGenerator.GenerateArray(10000);
    var begin=Date.now();    
    let sorted = CocktailSort.sort(unsorted);
    var end= Date.now();  
    var timeSpent=(end-begin)/1000+"secs";
    
    console.log('Time Spent Cocktail Sort: ',timeSpent);
  });

  
  it('Sort an Array with bubble Timing', () => {

    let unsorted = RandomGenerator.GenerateArray(10000);
    var begin=Date.now();    
    let sorted = BubbleSort.sort(unsorted);
    var end= Date.now();  
    var timeSpent=(end-begin)/1000+"secs";
    
    console.log('Time Spent Bubble Sort: ',timeSpent);
  });

  it('should actually work with bubble sort', () => {

    let unsorted = RandomGenerator.GenerateArray(100);
    var begin=Date.now();    
    let sorted = BubbleSort.sort(unsorted);
    var end= Date.now();  
    var timeSpent=(end-begin)/1000+"secs";
    
    console.log('Sorted by bubblesort:  ',sorted);
  });

  it('should actually work with insertion sort', () => {

    let unsorted = RandomGenerator.GenerateArray(10);
    var begin=Date.now();    
    let sorted = InsertionSort.sort(unsorted);
    var end= Date.now();  
    var timeSpent=(end-begin)/1000+"secs";
    
    console.log('Sorted by insertion sort:  ',sorted);
  });
});
