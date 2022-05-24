const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function two(f) {
    if (f < 10) return "0" + f
    else return f
}

function solve(data) {
    const front = data[0].split(":").map(Number)
    const back = data[1].split(":").map(Number)
    const total = front[0] * 60 + front[1] + back[0] * 60 + back[1]
    const n = Math.floor(total / 60 / 24),
        h = Math.floor(total / 60) % 24,
        m = total % 60

    if (n > 0) console.log(two(h) + ":" + two(m) + " +" + n)
    else console.log(two(h) + ":" + two(m))
}

rl.on("line", (line) => {
    if (line == "00:00 00:00") rl.close()
    else solve(line.split(" "))
}).on("close", () => {
    process.exit()
})
