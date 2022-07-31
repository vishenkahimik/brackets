module.exports = function check(str, bracketsConfig) {
  let OPEN_BRACKETS = [];
  let PAIRS_BRACKETS = {};
  for (let i = 0; i < bracketsConfig.length; i++) {
    let key = bracketsConfig[i][1];
    let value = bracketsConfig[i][0];
    OPEN_BRACKETS.push(bracketsConfig[i][0]);
    PAIRS_BRACKETS[key] = value;
  }
  let stack = [];
  for (let i = 0; i < str.length; i++) {

    let currentSymbol = str[i];
    let topElement = stack[stack.length - 1];
    if (currentSymbol === topElement && currentSymbol == PAIRS_BRACKETS[currentSymbol]) {
      stack.pop();
    } else if (OPEN_BRACKETS.includes(currentSymbol)) {
      stack.push(currentSymbol);
    } else {
      if (stack.length === 0) {
        return false;
      }

      if (PAIRS_BRACKETS[currentSymbol] === topElement) {
        stack.pop();
      }
    }
  }
  return stack.length === 0;
};
