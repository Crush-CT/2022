const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function track(A, B, C, P) {
    return Math.floor(A * (B - P) ** C)
}

function field(A, B, C, P) {
    return Math.floor(A * (P - B) ** C)
}

function solve(li) {
    const result =
        track(9.23076, 26.7, 1.835, li[0]) +
        field(1.84523, 75, 1.348, li[1]) +
        field(56.0211, 1.5, 1.05, li[2]) +
        track(4.99087, 42.5, 1.81, li[3]) +
        field(0.188807, 210, 1.41, li[4]) +
        field(15.9803, 3.8, 1.04, li[5]) +
        track(0.11193, 254, 1.88, li[6])
    console.log(result)
}

let count = 0,
    N = 0

rl.on("line", (line) => {
    if (count == 0) N = Number(line)
    else if (count == N + 1) rl.close()
    else solve(line.split(" "))
    count++
}).on("close", () => {
    process.exit()
})
