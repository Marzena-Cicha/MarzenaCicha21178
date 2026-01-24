class MyMathModule {
  add(a, b) {
    return a + b;
  }

  sub(a, b) {
    return a - b;
  }

  mul(a, b) {
    return a * b;
  }

  div(a, b) {
    return b === 0 ? NaN : a / b;
  }

  pow(a, b) {
    return Math.pow(a, b);
  }
}

module.exports = MyMathModule;
