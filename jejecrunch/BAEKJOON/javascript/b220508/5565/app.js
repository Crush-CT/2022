const readline = require("readline")

// 인터페이스 객체를 만들자.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    for (let i = 0; i < input.length; i++) {
        N -= input[i]
    }

    console.log(N)
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
