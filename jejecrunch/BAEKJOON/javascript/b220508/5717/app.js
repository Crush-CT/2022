const readline = require("readline")

// 인터페이스 객체를 만들자.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    console.log(input.join("\n").trim())
}

let input = []

rl.on("line", (line) => {
    if (line == "0 0") rl.close()

    input.push(
        line
            .split(" ")
            .map((v) => +v)
            .reduce((a, c) => a + c, 0)
    )
})

rl.on("close", () => {
    solve(input)
    process.exit()
})
