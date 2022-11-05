const sumAll = function(n1, n2) {
    if (n1 < 0 || n2 < 0) {
        return "ERROR";
    }
    if (typeof n1 != "number" || typeof n2 != "number") {
        return "ERROR";
    }

    let total = 0
    let i = n1;
    let end = n2 + 1
    if (n2 < n1) {
        i = n2;
        end = n1 + 1
    }
    for (; i < end; i++) {
        total += i
    }
    return total
};

// Do not edit below this line
module.exports = sumAll;
