function isPrime(a) {
    if ((a === 2) || (a === 1)) {
        console.log(a+" is not prime.") //cheating a little...
    } else {
        var b = Math.floor(a/2);
        var keepTrack = [];
        for (var i = b; i>1; i--) {
            if ((a % i === 0)) {
                keepTrack.push("passed");
            }
        }
        if (keepTrack.length === 0) {
            console.log(a+" is prime.");
        } else {
            console.log(a+" is not prime.")
        }
    }
}

//examples
isPrime(2); //not prime
isPrime(3); //prime
isPrime(4); //not prime
isPrime(11); //prime
isPrime(99); //not prime
isPrime(7919); //prime