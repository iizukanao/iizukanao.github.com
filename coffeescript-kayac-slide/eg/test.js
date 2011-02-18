(function() {
  var arr, arr2, arr3, calls, defaultOpts, elapsed, fibonacci, num, opts, r, result, startTime, sum, tests, userOpts, zipped, _;
  _ = require('../js/underscore-min')._;
  arr = [1, 2, 3, 4, 5];
  _(arr).each(function(num) {
    return console.log(num);
  });
  arr2 = _(arr).map(function(num) {
    return num * 2;
  });
  console.log(arr2);
  sum = _(arr).reduce(function(memo, num) {
    return memo + num;
  }, 0);
  console.log("sum2: " + sum);
  arr3 = _(arr).without(3);
  console.log(arr3);
  zipped = _.zip(['a', 'b', 'c'], ['x', 'y', 'z']);
  console.log(zipped);
  defaultOpts = {
    width: 100,
    height: 100,
    x: 30,
    y: 30
  };
  userOpts = {
    width: 200,
    height: 200
  };
  opts = _(defaultOpts).clone();
  console.log(opts);
  _.extend(opts, userOpts);
  console.log(opts);
  result = _([1, 2, 3, 4, 5, 6]).chain().select(function(num) {
    return num % 2 === 0;
  }).tap(console.log).map(function(num) {
    return num * num;
  }).value();
  console.log("result: " + (result.join(', ')));
  _(3).times(function() {
    return console.log("hi");
  });
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
  console.log("elapsed " + elapsed + "ms");
  console.log("fibonacci() called " + calls + " times");
}).call(this);
