let givenPrime = 11;

let candidateNumber = givenPrime + 1;
let foundNextPrime = false;

while (!foundNextPrime) {
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(candidateNumber); i++) {
        if (candidateNumber % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime && candidateNumber > 1) {
        console.log("The given prime number is: " + givenPrime);
        console.log("The prime after " + givenPrime + " is " + candidateNumber + ".");
        foundNextPrime = true; // This will break the while loop
    } else {
        // If not prim increment and try the next number
        candidateNumber++;
    }
}