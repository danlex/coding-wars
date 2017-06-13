export class CocktailSort{

    public static sort<T>(array: Array<T>){
        let found: boolean = true;
        let start: number = 0;
        let end: number = array.length;
        while(found) {
            found = false;
            for(let i = start; i <= end - 1; i++) {
                if(array[i] > array[i + 1]) {
                    CocktailSort.swap(array, i, i + 1);
                    found = true;
                }
            }
            end --;
            
            if(!found) {
                break;
            }
            
            for(let j = end - 1; j >= start; j --) {
                if(array[j] > array[j + 1]) {
                    CocktailSort.swap(array, j, j + 1);
                    found = true;
                }
            }
            start ++;
        }
    }

    public static swap<T>(array: Array<T>, firstIndex: number, secondIndex:number){
        let temp: T;
        temp = array[firstIndex];
        array[firstIndex] = array[secondIndex];
        array[secondIndex] = temp;
    }
}