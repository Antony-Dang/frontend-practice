const add = function(n1, n2) {
	return n1 + n2;
};

const subtract = function(n1, n2) {
	return n1 - n2;
};

const sum = function(arr1) {
	return arr1.reduce((a, b) => a + b, 0)
};

const multiply = function(arr1) {
  return arr1.reduce((a, b) => a * b, 1)
};

const power = function(n1, n2) {
	let total = 1;
  for (let i = 0; i < n2; i++) {
    total *= n1;
  }
  return total;
};

const factorial = function(n1) {
  if (n1 == 0) {
    return 1;
  }

	return n1 * factorial(n1 - 1)
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
