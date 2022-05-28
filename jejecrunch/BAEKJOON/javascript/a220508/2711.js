const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
let count = 0,
    N = 0

rl.on("line", (line) => {
    if (count == 0) N = +line
    else if (count == N + 1) rl.close()
    else {
        const arr = line.split(" ")
        console.log(arr[1].slice(0, +arr[0] - 1) + arr[1].slice(+arr[0]))
    }
    count++
}).on("close", () => {
    process.exit()
})
