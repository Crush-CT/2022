const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    let res = 0,
        highest = 0,
        cnt = 0
    for (let hill of input) {
        if (hill > highest) {
            highest = hill
            cnt = 0
        } else {
            cnt += 1
            res = Math.max(res, cnt)
        }
    }

    console.log(res)
}

let count = 0,
    N = 0

rl.on("line", (line) => {
    if (count !== 0) solve(line.split(" ").map(Number))
    count++
}).on("close", () => {
    process.exit()
})
