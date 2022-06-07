const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(data) {
    const minus = data[0] - data[1]
    let result = [Math.max(Math.floor(minus / 2) - (minus % 2), 0), minus <= 1 ? 0 : minus % 2]
    console.log(result.join(" "))
}

rl.on("line", (line) => {
    if (line == "0 0") {
        rl.close()
    } else {
        solve(line.split(" "))
    }
}).on("close", () => {
    process.exit()
})
