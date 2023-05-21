var sum = function (array) {
  let sum = 0;
  for (let index = 0; index < array.length; index++) {
    sum += array[index];
  }
  return sum;
};

var recursion_sum = function (array) {
  if (array.length === 0) {
    return 0;
  }
  function add(array, i) {
    if (i === array.length - 1) {
      return array[i];
    }
    return array[i] + add(array, i + 1);
  }
  return add(array, 0);
};
let start = Date.now();
console.log(recursion_sum([1, 2, 3, 4, 5, 6]));
let timeTaken = Date.now() - start;
console.log("Total time taken : " + timeTaken + " milliseconds");
