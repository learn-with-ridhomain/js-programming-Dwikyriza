
/** 
 * Make a function that takes 2 number and return the larger number
 * Input : 2 numbers
 * Output: The larger number
 */

const solution = (num1, num2) => {
  if (num1 > num2) {
    return num1;
  } 
  return num2;
};

module.exports = {
  solution
};