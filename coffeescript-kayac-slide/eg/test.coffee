{_} = require '../js/underscore-min'

arr = [1, 2, 3, 4, 5]

_(arr).each (num) ->
    console.log num

arr2 = _(arr).map (num) ->
    num * 2
console.log arr2

sum = _(arr).reduce (memo, num) ->
    memo + num
, 0
console.log "sum2: #{sum}"

arr3 = _(arr).without(3)
console.log arr3

zipped = _.zip(['a', 'b', 'c'], ['x', 'y', 'z'])
console.log zipped

defaultOpts =
    width: 100
    height: 100
    x: 30
    y: 30
userOpts =
    width: 200
    height: 200
opts = _(defaultOpts).clone()
console.log opts
_.extend(opts, userOpts)
console.log opts

result = _([1..6]).chain().select (num) ->
    num % 2 is 0
.tap(console.log)
.map (num) ->
    num * num
.value()
console.log "result: #{result.join ', '}"

_(3).times ->
    console.log "hi"

calls = 0
fibonacci = (n) ->
    calls++
    if n < 2
        n
    else
        fibonacci(n - 1) + fibonacci(n - 2)
fibonacci = _(fibonacci).memoize()

tests = 40
elapsed = 0
for num in [0..tests]
    startTime = Date.now()
    r = fibonacci(num)
    elapsed += Date.now() - startTime
    console.log("num: #{num}, result: #{r}")
console.log("elapsed #{elapsed}ms")
console.log("fibonacci() called #{calls} times")

#_(tests).times ->
#    startTime = Date.now()
#    result = fibonacci(30)
#    elapsed += Date.now() - startTime
#    console.log("result: #{result}")
#console.log("fibonacci: #{elapsed}ms (avg: #{elapsed / tests}ms)")

#elapsed = 0
#for num in [0..tests]
#    console.log("num: #{num}")
#    startTime = Date.now()
#    result = fastFibonacci(num)
#    console.log("result: #{result}")
#    elapsed += Date.now() - startTime

#_(tests).times ->
#    startTime = Date.now()
#    result = fastFibonacci(30)
#    elapsed += Date.now() - startTime
#console.log("fastFibonacci: #{elapsed}ms (avg: #{elapsed / tests}ms)")


