export class PrimeNumbers{

    public static PrintPrimeNumbers(n){
        let primes: Array<boolean> = new Array<boolean>(n);

        let upperLimit: number = Math.sqrt(n);

        for (var i = 2; i < n; i++) {
            primes[i] = true;
        }

        for (var i = 2; i <= upperLimit; i++) {
            if(primes[i]){
                for (var j = i*i; j < n; j+=i) {
                    primes[j] = false;
                }
            }
        }

        for (var i = 0; i < primes.length; i++) {
            if(primes[i]){
                console.log('Found Prime: ' + i);
            }
        }
    }
}