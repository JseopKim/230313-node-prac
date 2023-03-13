const numberChecker = require("./num-checker.js");

module.exports = 
  function add(first, second) {
    if(numberChecker(first === true)) {
      return first + second;
    }
  }