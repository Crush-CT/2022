const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let S,
    N,
    res = ""

const num = [
    [
        [0, 1, 0],
        [1, 0, 1],
        [0, 0, 0],
        [1, 0, 1],
        [0, 1, 0],
    ], // 0
    [
        [0, 0, 0],
        [0, 0, 1],
        [0, 0, 0],
        [0, 0, 1],
        [0, 0, 0],
    ], // 1
    [
        [0, 1, 0],
        [0, 0, 1],
        [0, 1, 0],
        [1, 0, 0],
        [0, 1, 0],
    ], // 2
    [
        [0, 1, 0],
        [0, 0, 1],
        [0, 1, 0],
        [0, 0, 1],
        [0, 1, 0],
    ], // 3
    [
        [0, 0, 0],
        [1, 0, 1],
        [0, 1, 0],
        [0, 0, 1],
        [0, 0, 0],
    ], // 4
    [
        [0, 1, 0],
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
        [0, 1, 0],
    ], // 5
    [
        [0, 1, 0],
        [1, 0, 0],
        [0, 1, 0],
        [1, 0, 1],
        [0, 1, 0],
    ], // 6
    [
        [0, 1, 0],
        [0, 0, 1],
        [0, 0, 0],
        [0, 0, 1],
        [0, 0, 0],
    ], // 7
    [
        [0, 1, 0],
        [1, 0, 1],
        [0, 1, 0],
        [1, 0, 1],
        [0, 1, 0],
    ], // 8
    [
        [0, 1, 0],
        [1, 0, 1],
        [0, 1, 0],
        [0, 0, 1],
        [0, 1, 0],
    ], // 9
]

function solve() {
    for (let r = 0; r < 5; r++) {
        if (r % 2 === 0) {
            for (let i = 0; i < N.length; i++) {
                let d = N.charCodeAt(i) - "0".charCodeAt(0)

                res += " "

                for (let j = 0; j < +S; j++) num[d][r][1] === 1 ? (res += "-") : (res += " ")

                res += "  "
            }
            res += "\n"
        } else {
            for (let t = 0; t < +S; t++) {
                for (let i = 0; i < N.length; i++) {
                    let d = N.charCodeAt(i) - "0".charCodeAt(0)

                    num[d][r][0] == 1 ? (res += "|") : (res += " ")

                    for (let j = 0; j < S; j++) res += " "

                    num[d][r][2] == 1 ? (res += "|") : (res += " ")

                    res += " "
                }
                res += "\n"
            }
        }
    }
}
rl.on("line", (line) => {
    if (!S && !N) [S, N] = line.split(" ")
}).on("close", () => {
    solve()

    console.log(res)
    process.exit()
})
