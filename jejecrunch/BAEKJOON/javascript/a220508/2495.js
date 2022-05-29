const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let count = 0

function solve(data) {
    let cnt = 1,
        max_count = 1,
        prev = data[0][0]
    for (let j = 1; j < 8; j++) {
        const now = data[0][j]
        if (now == prev) cnt++
        else {
            max_count = Math.max(max_count, cnt)
            cnt = 1
            prev = now
        }
        max_count = Math.max(max_count, cnt)
    }

    console.log(max_count)
}
rl.on("line", (line) => {
    if (count == 4) rl.close()
    solve(line.split(" "))
    count++
}).on("close", () => {
    process.exit()
})
