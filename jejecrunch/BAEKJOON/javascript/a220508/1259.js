const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(data) {
    const half = Math.floor(data.length / 2)
    let front = []
    let end = []
    if (data.length % 2 != 0) {
        front = [...data].slice(0, half)
        end = [...data].slice(half + 1).reverse()
    } else {
        front = [...data].slice(0, half)
        end = [...data].slice(half).reverse()
    }

    if (front.length == end.length && JSON.stringify(front) === JSON.stringify(end))
        console.log("yes")
    else console.log("no")
}

rl.on("line", (line) => {
    if (line == "0") rl.close()
    else solve(line.split(""))
}).on("close", () => {
    process.exit()
})
