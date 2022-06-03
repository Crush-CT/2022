const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
function wr(s, w, st) {
    return s <= 4.5 && w >= 150 && st >= 200
}

function lm(s, w, st) {
    return s <= 6.0 && w >= 300 && st >= 500
}

function qb(s, w, st) {
    return s <= 5.0 && w >= 200 && st >= 300
}

function solve([s, w, st]) {
    let result = ""
    let count = 0

    if (wr(s, w, st)) {
        count++
        result += "Wide Receiver "
    }

    if (lm(s, w, st)) {
        count++
        result += "Lineman "
    }

    if (qb(s, w, st)) {
        count++
        result += "Quarterback "
    }

    if (count == 0) result += "No positions"
    console.log(result)
}

rl.on("line", (line) => {
    if (line == "0 0 0") rl.close()
    else solve(line.split(" "))
}).on("close", () => {
    process.exit()
})
