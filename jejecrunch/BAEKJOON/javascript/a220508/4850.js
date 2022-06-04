const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(data) {
    const [N, w, d, sum] = data
    const fullWeight = ((N * (N - 1)) / 2) * w,
        result = Math.abs(sum - fullWeight) / d
    if (!result) console.log(N)
    else console.log(result)
}
rl.on("line", (line) => {
    if (line == "0 0 0 0") rl.close()
    solve(line.split(" ").map(Number))
}).on("close", () => {
    process.exit()
})
