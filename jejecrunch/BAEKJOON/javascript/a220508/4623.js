const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(data) {
    const s1 = Math.max(data[0], data[1]) / Math.max(data[2], data[3])
    const s2 = Math.min(data[0], data[1]) / Math.min(data[2], data[3])
    let s = Math.max(s1, s2)
    if (s < 1) console.log("100%")
    else if (s > 100) console.log("1%")
    else console.log(Math.floor(100 / s) + "%")
}
rl.on("line", (line) => {
    if (line == "0 0 0 0") rl.close()
    solve(line.split(" ").map(Number))
}).on("close", () => {
    process.exit()
})
