
/** 
 * Make a function that takes a number and return whether it is even or not
 * Input : 1 number
 * Output: Boolean, true if it is an even number, false if it is an odd number
 */

const solution = (num1) => {
  if (num1 % 2 === 0) {
    return true
  }
  return false
};

module.exports = {
  solution
};
