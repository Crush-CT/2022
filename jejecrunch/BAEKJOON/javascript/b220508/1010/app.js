const readline = require("readline")

// 인터페이스 객체를 만들자.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function factorial(num) {
    if (num == 0) return 1
    return num * factorial(num - 1)
}

function comb(n1, n2) {
    return factorial(n2) / (factorial(n1) * factorial(n2 - n1))
}

function solve(input) {
    input.forEach((el) => {
        let [a1, a2] = el.map((e) => parseInt(e))
        a1 === a2 ? console.log(1) : console.log(parseInt(comb(a1, a2) + 0.5))
    })
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
            input.push(line.split(" "))
            count++
        }
    }
})

rl.on("close", () => {
    solve(input)
    process.exit()
})
