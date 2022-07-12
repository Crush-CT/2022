const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
 
let count = 0

rl.on("line", () => {
    count++
}).on("close", () => {
    console.log(count)
    process.exit()
})
