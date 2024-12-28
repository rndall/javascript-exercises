const palindromes = function (str) {
	const remove = [" ", ",", ".", "!"];
	const arr = str.toLowerCase().split("");

	for (let i = 0; i < arr.length; i++) {
		const char = arr[i];
		if (remove.includes(arr[i])) {
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
