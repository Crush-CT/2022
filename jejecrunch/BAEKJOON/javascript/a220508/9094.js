const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(data) {
    let c = 0
    for (let i = 1; i < data[0]; i++) {
        for (let j = 0; j < i; j++) {
            if (((i ** 2 + j ** 2 + data[1]) / (i * j)) % 1 == 0) {
                c++
            }
        }
    }
    console.log(c)
}

let count = 0,
    T = 0

rl.on("line", (line) => {
    if (count == 0) T = Number(line)
    else if (count == T + 1) rl.close()
    else solve(line.split(" ").map(Number))
    count++
}).on("close", () => {
    process.exit()
})
