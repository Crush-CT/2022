const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(data) {
    let count = 1

    for (let i = 0; i < data.length; i++) {
        const s = data[i]

        if (s == "S") count++
        else if (s == "L") {
            i++
            count++
        }
    }

    console.log(count > data.length ? data.length : count)
}

let count = 0

rl.on("line", (line) => {
    if (count > 0) solve(line)
    count++
}).on("close", () => {
    process.exit()
})
