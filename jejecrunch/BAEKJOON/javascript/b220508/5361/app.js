const readline = require("readline")

// 인터페이스 객체를 만들자.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    const result = []
    for (let i = 0; i < input.length; i++) {
        result.push(
            "$" +
                (
                    input[i][0] * 350.34 +
                    input[i][1] * 230.9 +
                    input[i][2] * 190.55 +
                    input[i][3] * 125.3 +
                    input[i][4] * 180.9
                ).toFixed(2)
        )
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
        if (count > N) rl.close()
        else {
            input.push(line.split(" ").map((v) => +v))
            count++
        }
    }
})

rl.on("close", () => {
    solve(input)
    process.exit()
})
