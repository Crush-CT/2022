const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve([a, b, c]) {
    const ans = c - a + b
    if (ans % b || (b && a > c)) return "X"
    else return ans / b
}

let result = []

rl.on("line", (line) => {
    if (line == "0 0 0") rl.close()
    result.push(solve(line.split(" ").map(Number)))
}).on("close", () => {
    console.log(result.join("\n").trim())
    process.exit()
})
