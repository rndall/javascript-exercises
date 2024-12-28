const palindromes = function (str) {
	const reversed = str.split("").reverse().join("");
	return str === reversed;
};

// Do not edit below this line
module.exports = palindromes;
