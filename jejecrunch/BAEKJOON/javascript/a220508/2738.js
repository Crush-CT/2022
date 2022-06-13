const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(data) {
    const A = data.slice(1, data[0][0] + 1),
        B = data.slice(data[0][0] + 1, data[0][0] * 2 + 1),
        result = new Array(data[0][0])

    for (let i = 0; i < data[0][0]; i++) {
        let arr = []
        for (let j = 0; j < data[0][1]; j++) {
            arr.push(A[i][j] + B[i][j])
        }
        result[i] = arr.join(" ")
    }
    console.log(result.join("\n"))
}
let input = []

rl.on("line", (line) => {
    input.push(line.split(" ").map(Number))
}).on("close", () => {
    solve(input)
    process.exit()
})
