const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    let res = 1,
        flag = false
    for (let v of input) {
        if (v % 2 !== 0) {
            res *= v
            flag = true
        }
    }

    console.log(flag ? res : input[0] * input[1] * input[2])
}

let data = []

rl.on("line", (line) => {
    data = line.split(" ").map(Number)
}).on("close", () => {
    solve(data)
    process.exit()
})
