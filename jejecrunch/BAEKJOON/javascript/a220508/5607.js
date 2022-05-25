const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(data) {
    const result = [0, 0]

    for (let i = 0; i < data.length; i++) {
        if (data[i][0] < data[i][1]) result[1] += data[i][0] + data[i][1]
        else if (data[i][0] > data[i][1]) result[0] += data[i][0] + data[i][1]
        else {
            result[0] += data[i][0]
            result[1] += data[i][1]
        }
    }

    console.log(result.join(" "))
}

let count = 0,
    N = 0,
    data = []

rl.on("line", (line) => {
    if (count == 0) N = Number(line)
    else if (count == N + 1) rl.close()
    else data.push(line.split(" ").map(Number))
    count++
}).on("close", () => {
    solve(data)
    process.exit()
})
