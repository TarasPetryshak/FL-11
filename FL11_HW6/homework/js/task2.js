let lengthSide1 = +prompt('Enter length of the first side of triangle', '');
let lengthSide2 = +prompt('Enter length of the second side of triangle', '');
let lengthSide3 = +prompt('Enter length of the third side of triangle', '');
if (lengthSide1 + lengthSide2 > lengthSide3 &&
    lengthSide1 + lengthSide3 > lengthSide2 &&
    lengthSide2 + lengthSide3 > lengthSide1) {
    if (lengthSide1 === lengthSide2 && lengthSide1 === lengthSide3 && lengthSide2 === lengthSide3) {
        console.log('Equivalent triangle');
    } else if (lengthSide1 === lengthSide2 || lengthSide1 === lengthSide3 || lengthSide2 === lengthSide3) {
        console.log('Isosceles triangle');
    } else {
        console.log('Normal triangle');
    }
} else {
    console.log('Triangle doesn\'t exist');
}