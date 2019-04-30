/** Takes a string of space separated numbers and returns
 * the maximum and minimum number
 * 
 * Should take O(n) time
 */

function highAndLow(numbers){
  number_list = numbers.split(' ');
  return Math.max(...number_list) + ' ' + Math.min(...number_list);
}
