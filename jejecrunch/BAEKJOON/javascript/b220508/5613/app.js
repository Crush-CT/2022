const readline = require("readline")

// 인터페이스 객체를 만들자.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    let result = input[0]
    let i = 1
    while (1) {
        if (input[i] == "=") {
            console.log(result)
            break
        }
        if (input[i] == "*") result *= input[++i]
        else if (input[i] == "/") result = Math.floor(result / input[++i])
        else if (input[i] == "+") result += input[++i]
        else if (input[i] == "-") result -= input[++i]
        i++
    }
}

let input = []

rl.on("line", (line) => {
    if (line == "=") {
        input.push(line)
        rl.close()
    } else if (isNaN(line)) {
        input.push(line)
    } else input.push(Number(line))
})

rl.on("close", () => {
    solve(input)
    process.exit()
})
