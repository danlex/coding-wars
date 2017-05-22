export class BubbleSort{

    public static sort<T>(arrayForSorting: Array<T>){
        let unsortedBelow:number = arrayForSorting.length;

        while(unsortedBelow != 0){
            let lastSwap = 0;
            for (var i = 0; i < unsortedBelow; i++) {
                if(arrayForSorting[i] > arrayForSorting[i+1]){
                    BubbleSort.swap(arrayForSorting,i,i+1)
                    lastSwap = i+1;
                }
            }
            unsortedBelow = lastSwap;
        }
        return arrayForSorting;
    }
    
    public static swap<T>(array: Array<T>, firstIndex: number, secondIndex:number){
        let temp = array[firstIndex];
        array[firstIndex] = array[secondIndex];
        array[secondIndex] = temp;
    }
}