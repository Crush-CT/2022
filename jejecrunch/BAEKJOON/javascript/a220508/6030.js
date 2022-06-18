const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function getFactor(num) {
    const result = []
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) result.push(i)
    }
    return result.sort((a, b) => a - b)
}

function solve(input) {
    const A = getFactor(+input[0])
    const B = getFactor(+input[1])

    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B.length; j++) {
            console.log(A[i] + " " + B[j])
        }
    }
}

rl.on("line", (line) => {
    solve(line.split(" "))
    rl.close()
}).on("close", () => {
    process.exit()
})
