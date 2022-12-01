const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function check(arr, n, l) {
    let ans = 0

    for (let i = 0; i < n; i++) {
        const now = arr[i]
        let possible = 1
        for (let j = 1; j < n; j++) {
            if (now[j - 1] === now[j]) possible++
            else if (now[j - 1] + 1 === now[j] && possible >= l) possible = 1
            else if (now[j - 1] === now[j] + 1 && possible >= 0) possible = 1 - l
            else {
                possible = -1
                break
            }
        }

        if (possible >= 0) ans++
    }

    return ans
}

function solve(input) {
    const newBoard = Array.from(Array(N), () => Array(N))
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            newBoard[j][i] = input[i][j]
        }
    }

    const res = check(input, N, L) + check(newBoard, N, L)
    console.log(res)
}

let N = 0,
    L = 0
const data = []

rl.on("line", (line) => {
    if (!N && !L) [N, L] = line.split(" ").map(Number)
    else {
        data.push(line.split(" ").map(Number))
    }
}).on("close", () => {
    solve(data)
    process.exit()
})
