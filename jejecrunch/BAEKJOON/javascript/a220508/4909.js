const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(data) {
    const arr = data.sort((a, b) => b - a)
    const result =
        arr.reduce((a, c, i) => (i != 0 && i != arr.length - 1 ? a + c : a), 0) / (arr.length - 2)
    console.log(result)
}
rl.on("line", (line) => {
    if (line == "0 0 0 0 0 0") rl.close()
    solve(line.split(" ").map(Number))
}).on("close", () => {
    process.exit()
})
