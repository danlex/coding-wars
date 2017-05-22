export class RandomGenerator{

    public static GenerateArray(size: number): Array<number>{
        let numbers = new Array<number>();
        
        for (var i = 0; i < size; i++) {
            numbers.push(Math.floor(Math.random() * (99 - 0)) + 0);            
        }
        return numbers;
    }
}