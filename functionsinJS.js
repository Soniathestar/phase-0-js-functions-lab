//calculate Tax
function calculateTax(amount) {
  return amount * 10;
}

console.log(calculateTax(1000))

// Convert to uppercase

function convertToUpperCase(text) {
  return text.toUpperCase();
}
console.log(convertToUpperCase("sonia")); 

// Find Maximum

function findMaximum(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
console.log(findMaximum(5, 10)); 

//Is palindrome

function isPalindrome(word) {
  const reversed = word.split('').reverse().join('');
  return word === reversed;
}

console.log(isPalindrome("madam"))

//Calculate discounted price
function calculateDiscountedPrice(originalPrice, discountPercentage) {
  const discount = (discountPercentage / 100) * originalPrice;
  return originalPrice - discount;
}

console.log(calculateDiscountedPrice(1000,10))

module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };clear