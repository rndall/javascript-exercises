const fibonacci = function (index) {
	let start = 0;
	let lastNum = 1;
	for (let i = 0; i < index; i++) {
		const temp = lastNum;
		lastNum += start;
		start = temp;
	}
	return start;
};

// Do not edit below this line
module.exports = fibonacci;
