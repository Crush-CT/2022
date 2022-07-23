const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let x = 1,
    y = 1,
    z

function solve(n) {
    for (let i = 3; i <= n; i++) {
        z = y
        y = (x + y) % 1000000007
        x = z
    }
    console.log(y + " " + (n - 2))
}

rl.on("line", (line) => {
    solve(+line)
}).on("close", () => {
    process.exit()
})
