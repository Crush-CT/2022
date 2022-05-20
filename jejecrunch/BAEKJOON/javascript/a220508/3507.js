const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(data) {
    let count = 0
    for (let i = 1; i < 100; i++) {
        for (let j = 1; j < 100; j++) {
            if (i + j === data) {
                count += 1
            }
        }
    }

    console.log(count)
}

rl.on("line", (line) => {
    solve(+line)
    rl.close()
}).on("close", () => {
    process.exit()
})
