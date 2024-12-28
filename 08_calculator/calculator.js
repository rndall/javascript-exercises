const add = function (a, b) {
	return a + b;
};

const subtract = function (a, b) {
	return a - b;
};

const sum = function (arr) {
	return arr.reduce((sum, num) => sum + num, 0);
};

const multiply = function (arr) {
	return arr.reduce((product, num) => product * num);
};

const power = function (num, power) {
	return num ** power;
};

const factorial = function (num) {
	if (num === 0) return 1;

	let product = 1;
	for (let i = 1; i <= num; i++) {
		product *= i;
	}
	return product;
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
