const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(list) {
    list.sort((a, b) => a[1] - b[1] || a[0] - b[0])

    let result = 0,
        recentEnd = 0
    list.forEach(([start, end]) => {
        //전에 진행된 회의가 끝나기 전에 시작되면 다음으로
        if (start < recentEnd) {
            return
        }
        //아니면 진행
        result++
        recentEnd = end
    })

    console.log(result)
}

let count = 0,
    N = 0,
    data = []

rl.on("line", (line) => {
    if (count == 0) {
        N = +line
    } else {
        data.push(line.split(" ").map((el) => parseInt(el)))
    }
    count++
}).on("close", () => {
    solve(data)
    process.exit()
})
