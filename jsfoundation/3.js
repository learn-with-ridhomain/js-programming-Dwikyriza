
/** 
 * Make a function that takes 3 number and return the largest number
 * Input : 3 numbers
 * Output: The largest number
 */

const solution = (num1, num2, num3) => {
  if (num1 >= num2 && num1 >= num3) {
    return num1
  } else if (num3 >= num2 && num3 >= num1) {
    return num3
  }
  return num2
} 




module.exports = {
  solution
};
