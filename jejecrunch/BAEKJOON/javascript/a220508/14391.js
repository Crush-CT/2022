const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let max = 0
let check = [
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
]
function solve(n, m, i, j) {
    if (j < m && i < n) {
        check[i][j] = true
        solve(n, m, i, j + 1)
        check[i][j] = false
        solve(n, m, i, j + 1)
    } else if (i < n - 1) {
        check[i + 1][0] = true
        solve(n, m, i + 1, 1)
        check[i + 1][0] = false
        solve(n, m, i + 1, 1)
    } else {
        max = Math.max(max, sum_puzzle(n, m))
    }
}

let sum_puzzle = function (n, m) {
    let sum_v = 0,
        sum_h = 0
    let tmp_v = "",
        tmp_h = ""
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= m; j++) {
            if (j < m && !check[i][j]) {
                sum_v += tmp_v * 1
                tmp_v = ""
            } else if (j < m && check[i][j]) {
                tmp_v = tmp_v + data[i][j]
            } else {
                sum_v += tmp_v * 1
                tmp_v = ""
            }
        }
    }
    for (let j = 0; j < m; j++) {
        for (let i = 0; i <= n; i++) {
            if (i < n && check[i][j]) {
                sum_h += tmp_h * 1
                tmp_h = ""
            } else if (i < n && !check[i][j]) {
                tmp_h = tmp_h + data[i][j]
            } else {
                sum_h += tmp_h * 1
                tmp_h = ""
            }
        }
    }
    return sum_v + sum_h
}

let count = 0,
    N = 0,
    M = 0,
    data = []

rl.on("line", (line) => {
    if (count === 0) [N, M] = line.split(" ").map(Number)
    else data.push(line.split("").map(Number))
    count++
}).on("close", () => {
    solve(N, M, 0, 0)
    console.log(max)
    process.exit()
})
