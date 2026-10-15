function isPalindrome(str) {
    let rev = str.split("").reverse().join("");
    return str === rev;
}
console.log("10. Палиндром 'шалаш':", isPalindrome("шалаш"));