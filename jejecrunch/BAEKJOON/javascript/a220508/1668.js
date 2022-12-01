const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function show(input) {
    let now_max = input[0],
        count = 1

    for (let e of input) {
        if (e > now_max) count += 1
        now_max = Math.max(now_max, e)
    }

    return count
}

function solve(input) {
    input.shift()
    const left = show(input),
        right = show(input.reverse())

    console.log(left + "\n" + right)
}

const data = []
rl.on("line", (line) => {
    data.push(+line)
}).on("close", () => {
    solve(data)
})
