const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(data) {
    let minCol = Number.MAX_SAFE_INTEGER,
        minRow = Number.MAX_SAFE_INTEGER,
        minSum = Number.MAX_SAFE_INTEGER

    for (let i = 1; i <= data; i++) {
        let j = data % i == 0 ? data / i : data / i + 1
        if (i + j < minSum) {
            minSum = i + j
            minRow = i
            minCol = j
        }
    }

    console.log(minRow + " " + minCol)
}

rl.on("line", (line) => {
    solve(+line)
    rl.close()
}).on("close", () => {
    process.exit()
})
