const readline = require("readline")

// 인터페이스 객체를 만들자.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function pic(num) {
    let result = ""

    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            if (i != 0 && i != num - 1 && j != 0 && j != num - 1) result += "J"
            else result += "#"
        }

        result += "\n"
    }

    return result
}

function solve(input) {
    const result = []

    for (let i = 0; i < input.length; i++) {
        result.push(pic(input[i]))
    }

    console.log(result.join("\n").trim())
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
