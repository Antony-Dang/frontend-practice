const palindromes = function(str) {
    let str2 = str.replaceAll("/[^A-Za-z0-9 ]/", "");
    console.log(str2);
    l = 0;
    r = str2.length - 1;

    while (l < r) {
        if (str2.charAt(l) !== str2.charAt(r)) {
            return false;
        }
        l += 1;
        r -= 1;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
