let fibCalculated;

const fibonacci = function(n) {
    if (n < 0) {
        return "OOPS";
    }
    if (isNaN(n)) {
        return "OOPS";
    }
    if (typeof(n) == "string") {
        n = parseInt(n);
    }

    fibCalculated = new Array(n + 1).fill(-1);
    return fib(n);
};

function fib(num) {
    if (num < 2) {
        return num;
    }
    if (fibCalculated[num] != -1) {
        return fibCalculated[num];
    }
    let fibNum = fib(num - 1) + fib(num - 2);
    fibCalculated[num] = fibNum;
    return fibNum;
}

// Do not edit below this line
module.exports = fibonacci;


fibonacci(4)