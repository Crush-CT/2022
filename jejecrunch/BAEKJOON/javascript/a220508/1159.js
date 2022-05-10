const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    let obj = {}
    const answer = []
    input.forEach((v) => {
        const firstAlpha = v[0]
        if (obj.hasOwnProperty(firstAlpha)) obj[firstAlpha]++
        else obj[firstAlpha] = 1
    })

    for (let key in obj) {
        if (obj[key] >= 5) answer.push(key)
    }

    console.log(answer.length == 0 ? "PREDAJA" : answer.sort().join(""))
}

let count = 0,
    N = 0
let data = []

rl.on("line", (line) => {
    if (count == 0) N = +line
    else if (count == N + 1) rl.close()
    else data.push(line)
    count++
}).on("close", () => {
    solve(data.sort((a, b) => a - b))
    process.exit()
})
