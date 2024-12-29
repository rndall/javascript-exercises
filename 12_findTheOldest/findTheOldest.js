const findTheOldest = function (arr) {
	arr.sort((a, b) => {
		firstAge = a.yearOfDeath - a.yearOfBirth;
		secondAge = b.yearOfDeath - b.yearOfBirth;
		return secondAge - firstAge;
	});

	return arr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
