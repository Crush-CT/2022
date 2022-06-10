const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let count = 0,
    N = 0,
    K = 0

rl.on("line", (line) => {
    if (count == 0) N = +line
    else if (count % 2 == 1) K = +line
    else if (count == 2 * (N + 1)) rl.close()
    else {
        console.log(line.split(" ").reduce((a, c) => +a + +c, 0))
    }
    count++
}).on("close", () => {
    process.exit()
})
