function getMin() {
    let minIndex = 0;
    for (let j = 0; j < arguments.length; j++) {
        if (arguments[minIndex] > arguments[j]) {
            minIndex = j;
        }
    }
    return arguments[minIndex];
}
console.log(getMin(3, 5, 2, 10, 25, 6));