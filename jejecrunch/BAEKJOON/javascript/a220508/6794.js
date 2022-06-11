function solve(n) {
    count = 0
    for (let i = 0; i < 6; i++) {
        for (let j = i; j < 6; j++) {
            if (i + j == n) count += 1
        }
    }
    console.log(count)
}

const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.on("line", function (line) {
    solve(+line)
    rl.close()
}).on("close", function () {
    process.exit()
})
