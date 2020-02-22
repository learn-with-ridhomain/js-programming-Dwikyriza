/** 
 * Make a function that takes 3 number and return the median
 * Input : 3 numbers
 * Output: The median of 3
 */

const solution = (num1, num2, num3) => {
  if (num1 <= num2 && num1 >= num3) {
    return num1 
  } else if (num1 <= num3 && num1 >= num2) {
    return num1
  } else if (num2 <= num1 && num2 >= num3) {
    return num2
  } else if (num2 <= num3 && num2 >= num1) {
    return num2
  }
  return num3
};

module.exports = {
  solution
};