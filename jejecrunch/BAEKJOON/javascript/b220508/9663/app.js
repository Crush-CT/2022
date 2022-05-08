const readline = require("readline")

// 인터페이스 객체를 만들자.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    map = new Array(input)
    dfs(0)
    console.log(count)
}

function dfs(depth) {
    if (depth == input) {
        count++
        return
    }

    for (let i = 0; i < input; i++) {
        map[depth] = i
        if (check(depth)) dfs(depth + 1)
    }
}

function check(col) {
    for (let i = 0; i < col; i++) {
        if (map[col] == map[i]) {
            return false
        } else if (Math.abs(col - i) == Math.abs(map[col] - map[i])) {
            return false
        }
    }
    return true
}

let input = 0
let count = 0
let map

rl.on("line", (line) => {
    input = parseInt(line)
    rl.close()
})

rl.on("close", () => {
    solve(input)
    process.exit()
})
