const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    const [N, M] = input.shift()
    const arr = []
    for (let i = 0; i < N; i++) arr.push(input.shift())
    const K = input.shift()

    input.forEach((v) => {
        let sum = 0

        for (let i = v[0] - 1; i < v[2]; i++) {
            for (let j = v[1] - 1; j < v[3]; j++) {
                sum += arr[i][j]
            }
        }

        console.log(sum)
    })
}

const data = []

rl.on("line", (line) => {
    data.push(line.split(" ").map(Number))
}).on("close", () => {
    solve(data)
    process.exit()
})
