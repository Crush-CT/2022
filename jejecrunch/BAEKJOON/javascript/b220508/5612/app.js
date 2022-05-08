const readline = require("readline")

// 인터페이스 객체를 만들자.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    let m = M
    let max_p = 0
    for (let i = 0; i < N; i++) {
        m = m + input[i][0] - input[i][1]
        if (max_p < m) {
            max_p = m
        } else if (m < 0) {
            console.log(0)
            break
        }
    }
    if (m > 0) console.log(Math.max(max_p, M))
}

let input = []
let count = 0
let [N, M] = [0, 0]

rl.on("line", (line) => {
    if (count == 0) N = +line
    else if (count == 1) M = +line
    else {
        if (count - 2 == N) {
            rl.close()
        } else {
            input.push(line.split(" ").map((v) => Number(v)))
        }
    }
    count++
})

rl.on("close", () => {
    solve(input)
    process.exit()
})
