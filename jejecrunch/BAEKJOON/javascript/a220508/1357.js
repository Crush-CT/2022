const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function reverseStr(e) {
    let res = ""
    for (let i = e.length - 1; i >= 0; i--) res += e[i]
    return res
}

function solve(input) {
    const total = input.reduce((a, c) => a + c)
    const res = reverseStr(total + "")
    console.log(+res)
}

rl.on("line", (line) => {
    solve(line.split(" ").map(reverseStr).map(Number))
}).on("close", () => {
    process.exit()
})
