const readline = require("readline")

// 인터페이스 객체를 만들자.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    const result = []
    input = input.sort((a, b) => b - a)
    let gcdVal = Math.abs(input[1] - input[0])
    for (let i = 2; i < N; i++) {
        gcdVal = gcd(gcdVal, Math.abs(input[i] - input[i - 1]))
    }

    for (let i = 2; i <= gcdVal; i++) {
        if (gcdVal % i == 0) {
            result.push(i)
        }
    }

    console.log(result.join(" "))
}

function gcd(a, b) {
    while (b != 0) {
        let r = a % b
        a = b
        b = r
    }
    return a
}

let input = []
let N = 0
let count = 0

rl.on("line", (line) => {
    if (count == 0) {
        N = line.trim()
        count++
    } else {
        if (count == N + 1) rl.close()
        else {
            input.push(line)
            count++
        }
    }
})

rl.on("close", () => {
    solve(input, N)
    process.exit()
})
