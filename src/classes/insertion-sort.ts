//  for i = 1 to length(A)
//     x = A[i]
//     j = i - 1
//     while j >= 0 and A[j] > x
//         A[j+1] ← A[j]
//         j ← j - 1
//     end while
//     A[j+1] = x[4]
//  end for

export class InsertionSort{

    public static sort<T>(arrayForSorting: Array<T>){
        for (var i = 1; i < arrayForSorting.length; i++) {
            var element = arrayForSorting[i];
            var j =i-1;
            while(j >=0 && arrayForSorting[j] > element){
               InsertionSort.swap(arrayForSorting, j,j+1);
               j--; 
            }
            arrayForSorting[j+1] = element;
        }
        return arrayForSorting;
    }

    public static swap<T>(array: Array<T>, firstIndex: number, secondIndex:number){
        let temp = array[firstIndex];
        array[firstIndex] = array[secondIndex];
        array[secondIndex] = temp;
    }
}
