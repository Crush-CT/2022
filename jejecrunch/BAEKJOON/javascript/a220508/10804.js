const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let arr = []

for (let i = 0; i < 20; i++) arr.push(i + 1)

function solve([a, b]) {
    const front = arr.slice(0, a - 1)
    const reverse = arr.slice(a - 1, b).reverse()
    const back = arr.slice(b)

    arr = front.concat(reverse).concat(back)
}

rl.on("line", (line) => {
    solve(line.split(" ").map(Number))
}).on("close", () => {
    console.log(arr.join(" "))
})
