const readline = require("readline")

// 인터페이스 객체를 만들자.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function GCD(a, b) {
    let x
    let y
    if (a > b) {
        x = a
        y = b
    } else {
        x = b
        y = a
    }
    let r
    while (y != 0) {
        r = x % y
        x = y
        y = r
    }
    return x
}

function solve(input) {
    let result = ""
    input.forEach((v, i) => {
        if (i > 0) {
            const gcd = GCD(input[0], v)
            result += input[0] / gcd + "/" + v / gcd + "\n"
        }
    })
    console.log(result)
}

let input = []
let count = 0
let N = 0

rl.on("line", (line) => {
    if (count == 0) {
        N = Number(line)
        count++
    } else {
        input = line.split(" ")
        rl.close()
    }
})

rl.on("close", () => {
    solve(input)
    process.exit()
})
