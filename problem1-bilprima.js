//Bilangan Prima

function primeNumber(number) {

    let flag = "true"
    for(let i = number - 1; i>1; i--) {
        if (number % i === 0) {
            flag = "false"
        }
    }
    return flag
}

console.log(primeNumber(1000000007))
console.log(primeNumber(1500450271))
console.log(primeNumber(1000000000))
console.log(primeNumber(10000000019))
console.log(primeNumber(10000000033))