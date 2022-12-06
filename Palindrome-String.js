let palindrome = () => {
  str = "madam";
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return "It is not a Palindrome";
    } else {
      return "It is a Palindrome";
    }
  }
};
let result = palindrome();
console.log(result);
