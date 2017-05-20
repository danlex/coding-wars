export class FizzBuzz{
  public static run(){
    let printed = false;
    for (var i = 1; i <= 100; i++) {
      if(i % 3 === 0 && i%5 ===0){
        console.log('FizzBuzz: ' + i);
        printed = true;
      }
      if(!printed && i%3 ===0){
        console.log('Fizz: ' + i)
      }
      if(!printed && i%5 ===0){
        console.log('Buzz: ' + i);
      }
      else{
        console.log(i);
      }
      printed = false;
    }
  }
}