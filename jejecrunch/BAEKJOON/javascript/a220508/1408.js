const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function calcTime(h, m, s) {
    return parseInt(h) * 3600 + parseInt(m) * 60 + parseInt(s)
}

function formatTime(t) {
    return t < 10 ? "0" + t : t
}

function solve(cur, start) {
    let startTime = calcTime(start[0], start[1], start[2]),
        curTime = calcTime(cur[0], cur[1], cur[2])

    if (startTime < curTime) {
        startTime += 60 * 60 * 24
    }

    let sec = (startTime - curTime) % 60
    let min = ((startTime - curTime - sec) / 60) % 60
    let hour = (startTime - curTime - sec - min * 60) / 60 / 60

    console.log(`${formatTime(hour)}:${formatTime(min)}:${formatTime(sec)}`)
}

let count = 0,
    current = [],
    start = []

rl.on("line", (line) => {
    if (count === 0) current = line.split(":")
    else if (count === 1) start = line.split(":")
    count++
}).on("close", () => {
    solve(current, start)
    process.exit()
})
