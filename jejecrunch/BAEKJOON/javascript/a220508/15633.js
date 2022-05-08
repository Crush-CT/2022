const readline = require("readline")

// 인터페이스 객체를 만들자.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    let result = 0n

    for (let i = 1n; i * i <= BigInt(input); i++) {
        if (BigInt(input) % i == 0n) {
            if (i == BigInt(input) / i) result += i
            else result += i + BigInt(input) / i
        }
    }

    result = result * 5n - 24n

    console.log(result.toString())
}

let input = 0

rl.on("line", (line) => {
    input = Number(line)
    rl.close()
}).on("close", () => {
    solve(input)
    process.exit()
})
