function add(x) {
    let sum = x;
    function innerAdd(y) {
        sum += y;
        return innerAdd;
    }
    innerAdd.result = function () {
        return sum;
    };
    return innerAdd;
}

// Invoke the add function with a chain of function calls
console.log(add(1)(2)(3)(4).result()); // Output: 10

const forbiddenLove = {
    name: 'Teresa',
    age: undefined,
};

export { add, forbiddenLove };
