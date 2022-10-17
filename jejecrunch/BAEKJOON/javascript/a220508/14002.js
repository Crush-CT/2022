const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(data) {
    const dp = new Array(N).fill(0)
    let answer = []
    for (let i = 0; i < N; i++) {
        let max = 0,
            maxIndex = -1
        for (let j = 0; j < i; j++) {
            if (data[i] > data[j] && dp[j] > max) {
                max = dp[j]
                maxIndex = j
            }
        }
        dp[i] = max + 1
        answer[i] = maxIndex !== -1 ? answer[maxIndex].concat(data[i]) : [data[i]]
    }

    const maxLength = Math.max(...dp)
    console.log(maxLength)
    console.log(answer[dp.indexOf(maxLength)].join(" "))
}

let count = 0,
    N = 0
rl.on("line", (line) => {
    if (count == 0) N = +line
    else solve([...line.split(" ").map(Number)])
    count++
}).on("close", () => {
    process.exit()
})
