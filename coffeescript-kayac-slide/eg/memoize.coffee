{_} = require('../js/underscore-min')

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
    console.log "num: #{num}, result: #{r}"
console.log "elapsed #{elapsed} ms"
console.log "called #{calls} times"
