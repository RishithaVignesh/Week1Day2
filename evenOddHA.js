function isOddOrEven(number) {
    let result;

    if (number % 2 === 0) {
        result = "Even";
    } else {
        result = "Odd";
    }

    return result;
}

console.log(isOddOrEven(10));
console.log(isOddOrEven(7));