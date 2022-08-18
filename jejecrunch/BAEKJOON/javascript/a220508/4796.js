const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let case_num = 1

function solve([L, P, V]) {
    let option = V % P > L ? L : V % P
    let result = Math.floor(V / P) * L + option
    console.log(`Case ${case_num++}: ${result}`)
}

rl.on("line", (line) => {
    if (line === "0 0 0") rl.close()
    solve(line.split(" ").map(Number))
}).on("close", () => {
    process.exit()
})
