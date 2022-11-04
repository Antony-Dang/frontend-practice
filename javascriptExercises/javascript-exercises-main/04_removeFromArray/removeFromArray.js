const removeFromArray = function(arr, ...args) {
    console.log(arr);
    console.log(args);

    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
        arr = removeAllFromArray(arr, args[i]);
    }
    console.log(arr);
    return arr;
};

function removeAllFromArray(arr, item) {
    for (let i = arr.length; i >= 0; i --) {
        if (arr[i] === item) {
            arr.splice(i, 1);
        }
    }
    return arr;
}

// Do not edit below this line
module.exports = removeFromArray;
