const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let N, M, R
const data = []

function print(arr) {
    console.log(
        arr
            .map((v) => v.join(" "))
            .join("\n")
            .trim()
    )
}

function rotate(arr) {
    let min = Math.min(N, M)

    let temp = new Array(N).fill(null).map((_) => new Array(M).fill(0))
    for (let limit = 0; limit < Math.floor(min / 2); limit++) {
        for (let j = M - 2 - limit; j >= 0 + limit; j--) {
            temp[0 + limit][j] = arr[0 + limit][j + 1]
        }
        for (let j = 1 + limit; j < N - limit; j++) {
            temp[j][0 + limit] = arr[j - 1][0 + limit]
        }
        for (let j = 1 + limit; j < M - limit; j++) {
            temp[N - 1 - limit][j] = arr[N - 1 - limit][j - 1]
        }
        for (let j = N - 2 - limit; j >= 0 + limit; j--) {
            temp[j][M - 1 - limit] = arr[j + 1][M - 1 - limit]
        }
    }
    return temp
}

function solve(input) {
    let ret = [...input]
    for (let i = 0; i < R; i++) {
        ret = rotate(input)
        input = [...ret]
    }

    return ret
}

rl.on("line", (line) => {
    if (!N && !M && !R) [N, M, R] = line.split(" ").map(Number)
    else {
        data.push(line.split(" ").map(Number))
    }
}).on("close", () => {
    const res = solve(data)
    print(res)
    process.exit()
})
