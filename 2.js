function isFibonacciNumber(number) {
    let a = 0;
    let b = 1;
    
    while (b < number) {
        let temp = b;
        b = a + b;
        a = temp;
    }
    
    return b === number;
}

function verifFibonacci(numero) {
    if (isFibonacciNumber(numero)) {
        console.log(numero + " pertence");
    } else {
        console.log(numero + " não pertence");
    }
}
let numero = 6

verifFibonacci(numero);