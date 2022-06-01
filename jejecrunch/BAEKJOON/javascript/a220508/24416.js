let count1 = 0
let count2 = 0

function fib(n) {
    if (n == 1 || n == 2) {
        ++count1
        return 1
    } else {
        return fib(n - 1) + fib(n - 2)
    }
}
const f = new Array(1000000001)
function fibonacci(n) {
    f[1] = f[2] = 1
    for (let i = 3; i <= n; i++) {
        count2++
        f[i] = f[i - 1] + f[i - 2]
    }
    return f[n]
}

function solve(n) {
    fibonacci(n)
    fib(n)
    console.log(count1, count2)
}

const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.on("line", function (line) {
    solve(+line)
    rl.close()
}).on("close", function () {
    process.exit()
})
