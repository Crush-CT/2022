const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let N = 0,
    data = [],
    check = [],
    home = 0,
    dx = [1, -1, 0, 0],
    dy = [0, 0, 1, -1]

function main() {
    const cnt = []

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (check[i][j] === 1) {
                dfs(i, j)
                cnt.push(home)
                home = 0
            }
        }
    }

    console.log(cnt.length)
    cnt.sort((a, b) => a - b)
    cnt.map((e) => console.log(e))
}

function dfs(i, j) {
    if (rangeCheck(i, j) && check[i][j] === 1) {
        check[i][j] = 0
        home += 1
        for (let k = 0; k < dx.length; k++) {
            dfs(i + dx[k], j + dy[k])
        }
    }
}

function rangeCheck(i, j) {
    if (i >= 0 && i < N && j >= 0 && j < N) {
        return true
    } else return false
}

rl.on("line", (line) => {
    if (!N) N = +line
    else {
        data.push(line.split("").map(Number))
        if (data.length === N) {
            check = [...data]
            main()
            data = []
        }
    }
})
