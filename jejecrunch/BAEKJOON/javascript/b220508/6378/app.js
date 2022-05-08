const readline = require("readline")

// 인터페이스 객체를 만들자.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    let result = ""

    for (let i = 0; i < input.length; i++) {
        result += digital(input[i]) + "\n"
    }

    console.log(result.trim())
}

function digital(num) {
    let answer = 0

    const bi = num
    answer = ((bi - 1n) % 9n) + 1n

    return answer.toString()
}

let input = []

rl.on("line", (line) => {
    if (line === "0") rl.close()
    else {
        input.push(BigInt(line))
    }
})

rl.on("close", () => {
    solve(input)
    process.exit()
})
