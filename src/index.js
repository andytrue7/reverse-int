module.exports = function reverse (n) {
  // let splitString = String(n).split('');
  // let reverseArray = splitString.reverse();
  // let joinArray = reverseArray.join('');
  return Number(String(Math.abs(n)).split('').reverse().join('')); 
}
