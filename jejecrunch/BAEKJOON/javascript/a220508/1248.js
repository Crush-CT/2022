const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let count = 0
let N = 0,
    l = 0
let data = []
const board = []
let end = false

function check(arr) {
    let x = arr.length - 1
    let sum = 0
    for (let i = x; i >= 0; i--) {
        sum += arr[i]
        if (board[i][x - i] == "+" && sum <= 0) return false
        if (board[i][x - i] == "-" && sum >= 0) return false
        if (board[i][x - i] == "0" && sum != 0) return false
    }
    return true
}

function solve(arr) {
    if (end) return
    if (arr.length === N) {
        console.log(arr.join(" "))
        end = true
        return
    }

    for (let i = -10; i <= 10; i++) {
        arr.push(i)
        if (check(arr)) {
            solve(arr)
        }
        arr.pop()
    }
}

rl.on("line", (line) => {
    if (count == 0) {
        N = +line
        l = +line
    } else if (count == N + 1) rl.close()
    else {
        data = line.split("")
    }
    count++
}).on("close", () => {
    while (data.length > 0) {
        board.push([])
        for (let i = 0; i < l; i++) {
            board[board.length - 1].push(data.shift())
        }
        l--
    }
    solve([])
    process.exit()
})
