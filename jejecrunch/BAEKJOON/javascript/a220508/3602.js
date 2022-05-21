const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(data) {
    const [b, w] = data.split(" ").map(Number)
    let can = false,
        maxSide
    for (let i = 1; ; i++) {
        let half = Math.floor((i * i) / 2)
        let otherHalf = i * i - half
        if ((b >= half && w >= otherHalf) || (w >= half && b >= otherHalf)) {
            can = true
            maxSide = i
        } else {
            break
        }
    }

    if (can) console.log(maxSide)
    else console.log("Impossible")
}

rl.on("line", (line) => {
    solve(line)
    rl.close()
}).on("close", () => {
    process.exit()
})
