const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(data) {
    data = data.sort((a, b) => a - b)
    if (data[0] + data[1] <= data[2]) console.log("Case #" + i++ + ": invalid!")
    else if (data[0] == data[1] && data[1] == data[2]) console.log("Case #" + i++ + ": equilateral")
    else if (data[1] == data[0] || data[1] == data[2] || data[0] == data[2])
        console.log("Case #" + i++ + ": isosceles")
    else console.log("Case #" + i++ + ": scalene")
}

let count = 0,
    N = 0,
    i = 1

rl.on("line", (line) => {
    if (count == 0) N = Number(line)
    else if (count == N + 1) rl.close()
    else solve(line.split(" ").map(Number))
    count++
}).on("close", () => {
    process.exit()
})
