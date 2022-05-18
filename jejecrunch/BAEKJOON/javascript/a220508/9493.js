const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve([M, A, B]) {
    const t = Math.round((M / A - M / B) * 3600)
    let h = Math.floor(t / 3600),
        m = Math.floor((t % 3600) / 60),
        s = t % 60

    if (m < 10) m = "0" + m
    if (s < 10) s = "0" + s
    console.log(h + ":" + m + ":" + s)
}

rl.on("line", (line) => {
    if (line != "0 0 0") {
        solve(line.split(" ").map(Number))
    }
}).on("close", () => {
    process.exit()
})
