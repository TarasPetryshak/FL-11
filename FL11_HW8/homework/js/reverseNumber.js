function reverseNumber(num) {
    let result = '';
    if (num < 0) {
        num *= -1;
        result += '-';
    }
    while (num > 0) {
        result += num % 10;
        num = Math.floor(num / 10);
    }
    return +result;
}
console.log(reverseNumber(1000));