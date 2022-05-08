const readline = require("readline")

// 인터페이스 객체를 만들자.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    let count = 0
    for (let i = 1; i <= 500; i++) {
        for (let j = 1; j <= 500; j++) {
            if (j * j == i * i + input) {
                count++
            }
        }
    }
    console.log(count)
}

let input = 0

rl.on("line", (line) => {
    input = parseInt(line)
    rl.close()
})

rl.on("close", () => {
    solve(input)
    process.exit()
})
