const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(data) {
    let total = 0
    const arr = data
        .replaceAll("-", "0")
        .replaceAll("\\", "1")
        .replaceAll("(", "2")
        .replaceAll("@", "3")
        .replaceAll("?", "4")
        .replaceAll(">", "5")
        .replaceAll("&", "6")
        .replaceAll("%", "7")
        .split("")

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "/") {
            total += -1 * Math.pow(8, arr.length - i - 1)
        } else {
            total += +arr[i] * Math.pow(8, arr.length - i - 1)
        }
    }
    console.log(total)
}

rl.on("line", (line) => {
    if (line == "#") rl.close()
    else solve(line)
}).on("close", () => {
    process.exit()
})
