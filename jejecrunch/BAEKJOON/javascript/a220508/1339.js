const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let N,
    data = []

function solve() {
    let tmp = 0
    let result = {}
    let v = 0

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < data[i].length; j++) {
            tmp = Math.pow(10, data[i].length - (j + 1))

            if ([data[i][j]] in result) {
                v = result[data[i][j]]
                result = { ...result, [data[i][j]]: v + tmp }
            } else {
                result = { ...result, [data[i][j]]: tmp }
            }
        }
    }

    let sortlist = []
    for (let i in result) {
        sortlist.push([i, result[i]])
    }
    sortlist.sort(function (a, b) {
        return b[1] - a[1]
    })

    let cnt = 9
    let sum = 0

    for (let k = 0; k < sortlist.length; k++) {
        sum += sortlist[k][1] * cnt
        cnt -= 1
    }
    console.log(sum)
}

rl.on("line", (line) => {
    if (!N) {
        N = +line
    } else {
        data.push(line.split(""))
    }
}).on("close", () => {
    solve()
    process.exit()
})
