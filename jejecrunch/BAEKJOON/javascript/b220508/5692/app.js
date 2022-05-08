const readline = require("readline")

// 인터페이스 객체를 만들자.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function factorial(n) {
    if (n == 0) return 1
    if (n < 2) return n
    return factorial(n - 1) * n
}

function solve(input) {
    let result = new Array(input.length).fill(0)
    for (let i = 0; i < input.length; i++) {
        const arr = input[i]
            .split("")
            .reverse()
            .forEach((v, j) => {
                result[i] += v * factorial(j + 1)
            })
    }
    console.log(result.join("\n").trim())
}

let input = []

rl.on("line", (line) => {
    if (line == "0") rl.close()

    input.push(line)
})

rl.on("close", () => {
    solve(input)
    process.exit()
})
