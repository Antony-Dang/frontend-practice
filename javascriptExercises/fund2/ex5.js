const prompt = require('prompt-sync')({sigint: true});

let num1 = parseInt(prompt("Enter Number: "));

function add7(num) {
    return num + 7;
}

console.log("Original Number is " + num1 + ", new number is " + add7(num1));

let num2 = parseInt(prompt("Enter Number 2: "));

function multiply(num) {
    return num * 2;
}

console.log("Original Number 2 is " + num2 + ", new number 2 is " + multiply(num2));

let string1 = prompt("Enter string: ");

function capitaliseFirstLetter(string) {
    let newString = string1[0].toUpperCase();
    newString += string1.slice(1, string1.length).toLowerCase();
    return newString
}

console.log("Original string is " + string1 + ", new string is " + capitaliseFirstLetter(string1));


function getLastLetter(string) {
    return string.charAt(string.length - 1);
}

console.log(getLastLetter(string1));