(function() {
  var calls, elapsed, fibonacci, num, r, startTime, tests, _;
  _ = require('../js/underscore-min')._;
  calls = 0;
  fibonacci = function(n) {
    calls++;
    if (n < 2) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  };
  fibonacci = _(fibonacci).memoize();
  tests = 40;
  elapsed = 0;
  for (num = 0; (0 <= tests ? num <= tests : num >= tests); (0 <= tests ? num += 1 : num -= 1)) {
    startTime = Date.now();
    r = fibonacci(num);
    elapsed += Date.now() - startTime;
    console.log("num: " + num + ", result: " + r);
  }
  console.log("elapsed " + elapsed + " ms");
  console.log("called " + calls + " times");
}).call(this);
