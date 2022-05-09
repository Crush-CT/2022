const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.on("line", (line) => {
    const arr = new Array(+line).fill("a")
    console.log(arr.join(""))
    rl.close()
}).on("close", () => {
    process.exit()
})
