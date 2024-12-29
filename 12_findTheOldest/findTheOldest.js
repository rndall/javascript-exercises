const findTheOldest = function (arr) {
	arr.sort((a, b) => {
		ageA = (a.yearOfDeath || new Date().getFullYear()) - a.yearOfBirth;
		ageB = (b.yearOfDeath || new Date().getFullYear()) - b.yearOfBirth;

		return ageB - ageA;
	});

	return arr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
