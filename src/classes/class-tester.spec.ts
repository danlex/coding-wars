import { TestBed, async } from '@angular/core/testing';

import { PrimeNumbers } from './prime-numbers';
import { Queue } from "classes/queue";

describe('class tester', () => {
  // it('should print the prime numbers from 0 - 100', () => {
  //   PrimeNumbers.PrintPrimeNumbers(101);
  // });

  it('Should Properly exercise the queue', ()=>{
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
});
