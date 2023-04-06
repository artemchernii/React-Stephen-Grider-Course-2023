function add(x) {
    let sum = x;
    function innerAdd(y) {
        sum += y;
        return innerAdd;
    }
    innerAdd.toString = function () {
        return sum;
    };
    return innerAdd;
}

// Invoke the add function with a chain of function calls
console.log(add(1)(2)(3)(4).toString()); // Output: 10
console.log(`${add(1)(2)(3)(4)}`); // Output: 10

function addNums(num) {
    function innerAdd(newNum) {
        return addNums(num + newNum);
    }
    innerAdd.valueOf = function () {
        return num;
    };
    return innerAdd;
}

console.log(addNums(2)(3)(4)(5).valueOf()); // Output: 14

function add2(a) {
    function fn(b) {
        return add2(a + b);
    }
    fn.resultString = function () {
        return a;
    };
    return fn;
}

console.log(add2(1)(2)(3)(4)(5).resultString()); // Output: 15

function add3(a) {
    let total = a;

    function fn(b) {
        total += b;
        return fn;
    }

    fn.valueOf = function () {
        return total;
    };

    return fn;
}

console.log(add3(1)(2)(3)(4)(5).valueOf()); // Output: 15

const parentObj = { name: 'Artem', age: 29, hot: true };

const { age, ...parent } = parentObj;
console.log(parentObj);
console.log(parent);
