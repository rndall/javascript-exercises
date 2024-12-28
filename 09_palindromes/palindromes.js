const palindromes = function (str) {
	const remove = [" ", ",", ".", "!"];
	const clean = str
		.toLowerCase()
		.split("")
		.filter((char) => !remove.includes(char))
		.join("");

	const reversed = clean.split("").reverse().join("");
	return clean === reversed;
};

// Do not edit below this line
module.exports = palindromes;
