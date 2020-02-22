/** 
 * Make a function that takes a function, and check whether the function has return value or not
 * Input : function
 * Output: boolean
 */

const solution = (a) => {
  a()
  if (typeof a() === 'undefined') {
    return false
  }
  return true
};

module.exports = {
  solution
};