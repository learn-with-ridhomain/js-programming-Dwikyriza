/** 
 * Make a function that takes 3 number and return true if the sum of the first and second argument is greater than the third
 * Input : 3 numbers
 * Output: boolean
 */

const solution = (num1, num2, num3) => {
  if (num1 + num2 > num3) {
    return true
  }
  return false
};

module.exports = {
  solution
};