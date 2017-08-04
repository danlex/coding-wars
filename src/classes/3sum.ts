export class Sum3 {
  public static addup(array: number[]) {
      const arrayHash = this.computeArrayHash(array);
      const len = array.length;
      for(let i = 0; i < len; i++) {
          for(let j = i + 1; i < len; j++) {
              const sum = array[i] + array[j];
              const existsPosition: number = this.valueExistsPosition(i, j, sum , arrayHash);
              if(existsPosition !== -1) {
                  console.log(i, j, existsPosition);
              }  
          }
      } 
  }

  protected static valueExistsPosition(i, j, sum, arrayHash): number{
      if(arrayHash[sum] !== undefined) {
          return arrayHash[sum][0];
      }
      return -1;
  }

  protected static computeArrayHash(array: number[]) {
    const arrayHash = {};
    const len = array.length;
    for(let i = 0; i < len; i++) {
        if (arrayHash[array[i]] === undefined) {
            arrayHash[array[i]] = [i];
        } else {
            arrayHash[array[i]].push(i);
        }
    }
  }
}
