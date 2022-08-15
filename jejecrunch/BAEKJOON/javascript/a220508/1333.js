const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve([N, L, D]) {
    const sec = new Array()
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < L; j++) sec.push(true)

        if (i !== N - 1) {
            for (let j = 0; j < 5; j++) {
                sec.push(false)
            }
        }
    }

    let result = 0
    while (result < sec.length) {
        if (sec[result] === false) break
        result += D
    }

    console.log(result)
}

rl.on("line", (line) => {
    solve(line.split(" ").map(Number))
}).on("close", () => {
    process.exit()
})
