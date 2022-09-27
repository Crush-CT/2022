const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function check(n) {
    const target = Math.floor(N / 2)
    let cnt = 0
    while (n > 0) {
        if (n & 1) {
            cnt++
        }
        n = n >> 1
    }
    if (cnt <= target) return true
    return false
}

function getSpec(arr) {
    let spec = 0
    for (let i = 0; i < arr.length; i++) {
        const x = arr[i]
        for (let j = 0; j < arr.length; j++) {
            if (i == j) continue
            const y = arr[j]
            spec += data[x][y]
        }
    }
    return spec
}

function solve(input) {
    let min = Number.MAX_SAFE_INTEGER

    for (let i = 0; i < 1 << N; i++) {
        if (check(i)) {
            let value = i
            const start = []
            const link = []

            for (let j = 0; j < N; j++) {
                if (value & 1) {
                    start.push(j)
                } else {
                    link.push(j)
                }

                value = value >> 1
            }

            const specStart = getSpec(start)
            const specLink = getSpec(link)

            const specDiff = Math.abs(specLink - specStart)
            if (specDiff < min) min = specDiff
        }
    }

    console.log(min)
}

let count = 0
let N = 0
let data = []

rl.on("line", (line) => {
    if (count == 0) N = +line
    else if (count == N + 1) rl.close()
    else data.push(line.split(" ").map(Number))
    count++
}).on("close", () => {
    solve(data)
    process.exit()
})
