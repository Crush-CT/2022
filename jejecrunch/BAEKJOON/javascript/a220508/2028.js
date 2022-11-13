const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let s = ""

for (let i = 1; i < 100001; i++) s += i

function solve(num) {
    const pow = Math.pow(num, 2) + ""
    const slice = pow.slice(pow.length - (num + "").length)

    if (slice === num + "") console.log("YES")
    else console.log("NO")
}

let T

rl.on("line", (line) => {
    if (!T) T = +line
    else solve(+line)
})
