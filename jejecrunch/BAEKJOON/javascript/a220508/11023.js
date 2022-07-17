const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.on("line", (line) => {
    const total = line.split(" ").map(Number).reduce((a, c) => a+c, 0)
    console.log(total)
}).on("close", () => {
    process.exit()
})
