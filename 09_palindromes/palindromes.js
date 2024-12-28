const palindromes = function (str) {
	const arr = str.split("");

	for (let i = 0; i < arr.length; i++) {
		if (arr[i].toUpperCase() === arr[i].toLowerCase()) {
			arr.splice(i, 1);
			i--;
		}
	}

	const trimmed = arr.join("");

	const reversed = arr.reverse().join("");
	return trimmed === reversed;
};

// Do not edit below this line
module.exports = palindromes;
