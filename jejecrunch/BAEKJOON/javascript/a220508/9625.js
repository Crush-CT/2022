const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const countA = new Array(45).fill(1, 0, 3).fill(0, 1, 2),
    countB = new Array(45).fill(0, 0, 1).fill(1, 1, 2)

function fibonacci(data) {
    for(let i=3;i<=data;i++) {
        countA[i] = (countA[i-1])+(countA[i-2]);
    }

    for(let i=2;i<=data;i++) {
        countB[i] = (countB[i-1])+(countB[i-2]);
    }
}
function solve(num) {
    fibonacci(num)

    console.log(countA[num], countB[num])
}

rl.on("line", (line) => {
    solve(line)
    process.exit()
})
