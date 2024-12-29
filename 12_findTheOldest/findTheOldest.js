const findTheOldest = function (arr) {
	arr.sort((a, b) => {
		ageA = a.yearOfDeath - a.yearOfBirth;
		ageB = b.yearOfDeath - b.yearOfBirth;
		console.log("first", ageA, ageB);

		return Number.isNaN(ageB) ? -1 : ageB - ageA;
	});

	return arr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
