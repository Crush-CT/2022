const readline = require("readline")

// 인터페이스 객체를 만들자.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let count = 0,
    data = [],
    num = 0

function solve(arr, n) {
    console.log(arr.filter((v) => v == n).length)
}

rl.on("line", (line) => {
    if (count == 0) N = +line
    else if (count == 3) rl.close()
    else if (count == 2) num = +line
    else data = line.split(" ")
    count++
}).on("close", () => {
    solve(data, num)
    process.exit()
})
