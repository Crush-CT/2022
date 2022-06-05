const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(data) {
    const [r, e, c] = data
    if (e - r - c > 0) console.log("advertise")
    else if (e - r - c < 0) console.log("do not advertise")
    else if (e - r - c == 0) console.log("does not matter")
}

let count = 0,
    N = 0

rl.on("line", (line) => {
    if (count == 0) N = +line
    else {
        solve(line.split(" ").map(Number))
    }
    count++
}).on("close", () => {
    process.exit()
})
