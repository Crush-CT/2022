const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    const N = input.shift()

    const res = [1]

    input = input[0]

    for (let i = 1; i < N; i++) {
        const num = input[i] // 뽑은 숫자 저장
        if (num === 0) {
            // 만약 0이면 그냥 뒤에 가서 줄선다.
            res.push(i + 1)
        }
        if (num >= 1) {
            // 만약 1이상이면 뒤에서 그만큼 뺀 곳에 선다.
            res.splice(res.length - num, 0, i + 1)
        }
    }

    console.log(res.join(" "))
}

const data = []

rl.on("line", (line) => {
    data.push(line.split(" ").map(Number))
}).on("close", () => {
    solve(data)
    process.exit()
})
