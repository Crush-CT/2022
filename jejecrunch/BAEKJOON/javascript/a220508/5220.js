const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(data) {
    if (
        data[0]
            .toString(2)
            .split("")
            .filter((v) => v == 1).length %
            2 ==
        data[1]
    ) {
        console.log("Valid")
    } else {
        console.log("Corrupt")
    }
}

let count = 0,
    N = 0

rl.on("line", (line) => {
    if (count == 0) N = Number(line)
    else if (count == N + 1) rl.close()
    else solve(line.split(" ").map(Number))
    count++
}).on("close", () => {
    process.exit()
})
