const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(data) {
    total += data[0]*data[1]
}

let count = 0,
    N = 0,
    M = 0,
    total= 0

rl.on("line", (line) => {
    if (count == 0) N = Number(line)
    else if(count == 1) M = Number(line)
    else if (count == N + 1) rl.close()
    else solve(line.split(" ").map(Number))
    count++
}).on("close", () => {
    if(total == N) console.log("Yes")
    else console.log("No")
    process.exit()
})
