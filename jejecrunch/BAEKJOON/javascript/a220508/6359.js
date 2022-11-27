const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    const T = input.shift()

    let result = []

    for (let i = 0; i < input.length; i++) {
        // prison 0번째는 index 맞추기
        let prison = new Array(input[i] + 1).fill(true)
        for (let j = 2; j <= input[i]; j++) {
            for (let k = j; k <= input[i]; k += j) {
                prison[k] = !prison[k]
            }
        }
        result.push(prison.filter((el) => el === true).length - 1)
    }
    console.log(result.join("\n"))
}

const data = []

rl.on("line", (line) => {
    data.push(+line)
}).on("close", () => {
    solve(data)
    process.exit()
})
