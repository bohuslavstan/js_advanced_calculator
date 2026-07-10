'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  const calculator = {
    add(a, b) {
      return a + b;
    },
    subtract(a, b) {
      return a - b;
    },
    multiply(a, b) {
      return a * b;
    },
    divide(a, b) {
      return a / b;
    },
    operate(operation, number) {
      this.result = operation(this.result, number);

      return this;
    },
    reset() {
      this.result = 0;

      return this;
    },

    result: 0,
  };

  return calculator;
}

module.exports = makeCalculator;
