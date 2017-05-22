export class Permutation {

    public static permute(input: string): Object {

        let resultsObj = {};
        let charArray = input.split('');

        if (input.length === 1) {
            resultsObj[input] = true;
            return resultsObj;
        }

        for (var j = 0; j < charArray.length; j++) {
            let indexChar = charArray[j];
            let tempCharHolder = charArray[j];
            delete charArray[j];
            let newResults = this.permute(charArray.join(''));
            for (var index = 0; index < Object.keys(newResults).length; index++) {
                var element = Object.keys(newResults)[index];
                resultsObj[(indexChar + element)] = true;
                resultsObj[(element + indexChar)] = true;
            }
            charArray[j] = tempCharHolder;
        }

        return resultsObj;
    }
}