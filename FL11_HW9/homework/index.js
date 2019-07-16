function getNumbers(str) {
    let resultArr = [];
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(+str[i]) && str[i] !== ' ') {
            resultArr[count] = +str[i];
            count++;
        }
    }
    return resultArr;
}
function findTypes() {
    let valueNumber = 0;
    let valueString = 0;
    let valueNull = 0;
    let valueUndefined = 0;
    let valueBoolean = 0;
    let valueObject = 0;
    let valueArray = 0;
    let valueDate = 0;
    let resultObject = {};
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'number') {
            valueNumber++;
            if (valueNumber) {
                resultObject['number'] = valueNumber;
            }
        } else if (typeof arguments[i] === 'string') {
            valueString++;
            if (valueString) {
                resultObject['string'] = valueString;
            }
        } else if (typeof arguments[i] === 'undefined') {
            valueUndefined++;
            if (valueUndefined) {
                resultObject['undefined'] = valueUndefined;
            }
        } else if (typeof arguments[i] === 'boolean') {
            valueBoolean++;
            if (valueBoolean) {
                resultObject['boolean'] = valueBoolean;
            }
        } else if (arguments[i] === null) {
            valueNull++;
            if (valueNull) {
                resultObject['null'] = valueNull;
            }
        } else if (arguments[i].push) {
            valueArray++;
            if (valueArray) {
                resultObject['array'] = valueArray;
            }
        } else if (arguments[i].getMonth) {
            valueDate++;
            if (valueDate) {
                resultObject['date'] = valueDate;
            }
        } else {
            valueObject++;
            if (valueObject) {
                resultObject['object'] = valueObject;
            }
        }
    }
    return resultObject;
}
function executeforEach(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}
function mapArray(arr, func) {
    let tmpArray = [];
    executeforEach(arr, function (el) {
        tmpArray.push(func(el));
    });
    for (let i = 0; i < tmpArray.length; i++) {
        arr[i] = tmpArray[i];
    }
    return arr;
}
function filterArray(arr, func) {
    let tmpArray = [];
    executeforEach(arr, function (el) {
        if (func(el)) {
            tmpArray.push(el);
        }
    });
    for (let i = 0; i < tmpArray.length; i++) {
        arr[i] = tmpArray[i];
    }
    arr.length = tmpArray.length;
    return arr;
}
function showFormattedDate(date) {
    const begin = 3;
    const end = 15;
    return 'Date:' + ('' + date).substring(begin, end);
}
function canConvertToDate(str) {
    return !isNaN(Date.parse(str));
}
function daysBetween(firstDate, secondDate) {
    const divider = 864e5;
    return Math.round((secondDate - firstDate) / divider);
}
function getAmountOfAdultPeople(arr) {
    let tmpArray = [];
    let today = new Date();
    const divider = 365;
    const age = 18;
    for (let i = 0; i < arr.length; i++) {
        tmpArray.push(daysBetween(new Date(arr[i]['birthday ']), today) / divider);
    }
    filterArray(tmpArray, function (el) {
        return el > age
    });
    return tmpArray.length;
}
function keys(obj) {
    let resultArr = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            resultArr.push(key);
        }
    }
    return resultArr;
}
function values(obj) {
    let resultArr = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            resultArr.push(obj[key]);
        }
    }
    return resultArr;
}