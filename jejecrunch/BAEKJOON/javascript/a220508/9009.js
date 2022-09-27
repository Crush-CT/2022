const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const map = new Array(91).fill(0n, 0, 1).fill(1n, 1, 3)

for (let i = 3; i <= 46; i++) {
    map[i] = BigInt(map[i - 1]) + BigInt(map[i - 2])
}

function solve(data) {
    const res = []
    let t = 0n

    while (data) {
        for (let i = 1; i < 46; i++) {
            if (map[i] <= data) t = map[i]
        }
        data -= t
        res.push(t)
        res.sort((a, b) => {
            if (a > b) {
                return 1
            } else if (a < b) {
                return -1
            } else {
                return 0
            }
        })
    }

    console.log(res.join(" "))
}

let count = 0

rl.on("line", (line) => {
    if (count > 0) solve(BigInt(line))
    count++
}).on("close", () => {
    process.exit()
})
