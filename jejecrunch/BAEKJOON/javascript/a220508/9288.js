const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
let count = 0,
    N = 0,
    result = [],
    a = 1

function solve(data) {
    for (let b = 0; b < data.length; b++) {
        let r = "Case " + a++ + ":\n"

        for (let i = 1; i < 7; i++) {
            for (let j = i; j < 7; j++) {
                if (i + j == data[b]) r += "(" + i + "," + j + ")\n"
            }
        }
        console.log(r.trim())
    }
}

rl.on("line", (line) => {
    if (count == 0) N = Number(line)
    else if (count == N + 1) rl.close()
    else result.push(+line)
    count++
}).on("close", () => {
    solve(result)
    process.exit()
})
