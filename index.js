function capitalize(val) {
  return val[0].toUpperCase() + val.slice(1);
}

function reverse(val) {
  let newVal = '';
  for (let i = val.length - 1; i >= 0; i -= 1) {
    newVal += val[i];
  }
  return newVal;
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function analyzeArray(nums) {
  const { length } = nums;
  let min = nums[0];
  let max = nums[0];
  let average = nums[0];

  for (let i = 1; i < nums.length; i += 1) {
    min = min > nums[i] ? nums[i] : min;
    max = max > nums[i] ? max : nums[i];
    average += nums[i];
  }

  average = Math.ceil(average / length);

  return {
    length, min, max, average,
  };
}
export {
  capitalize, reverse, add, subtract, multiply, divide, analyzeArray,
};
