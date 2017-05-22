export class CocktailSort{

    public static sort<T>(arrayForSorting: Array<T>){
        let start: number = 0;
        let end: number = arrayForSorting.length;
        let swapped = true;

        while(swapped)
        {
            swapped = false;
            for (var i = start; i < end; i++) {
                if(arrayForSorting[i] > arrayForSorting[i+1]){
                    CocktailSort.swap(arrayForSorting,i,i+1);
                    swapped = true;
                }                
            }

            if(!swapped){
                break; //here it's been sorted.
            }

            swapped = false;
            end--;
            for (var i = end-1; i >= start; i--) {
                if(arrayForSorting[i] > arrayForSorting[i+1]){
                    CocktailSort.swap(arrayForSorting,i+1,i); //swap the other direction; pushing the biggest item down.
                    swapped = true;
                }   
            }

            if(!swapped){
                break;
            }
            start++;
        }
        return arrayForSorting;
    }

    public static swap<T>(array: Array<T>, firstIndex: number, secondIndex:number){
        let temp = array[firstIndex];
        array[firstIndex] = array[secondIndex];
        array[secondIndex] = temp;
    }
}