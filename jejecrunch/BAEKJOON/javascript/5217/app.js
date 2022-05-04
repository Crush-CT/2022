const readline = require("readline")

// 인터페이스 객체를 만들자.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function pair(num) {
    let result = []

    for (let i = 1; i <= 12; i++) {
        if (i !== num - i && num - i > 0 && result.indexOf(num - i + " " + i) < 0) {
            result.push(i + " " + (num - i))
        }
    }

    return result
}

function solve(input) {
    const result = []

    for (let i = 0; i < input.length; i++) {
        const str = "Pairs for " + input[i] + ": " + pair(input[i]).join(", ")

        result.push(str)
    }

    console.log(result.join("\n"))
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
