const removeFromArray = function(arr, ...values) {
  return arr.filter((el) => !values.includes(el))
};

// Do not edit below this line
module.exports = removeFromArray;
