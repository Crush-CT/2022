const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let sum = Number.MAX_SAFE_INTEGER

function solve(data) {
    const sub = data.split("-")

    for (let i = 0; i < sub.length; i++) {
        let temp = 0
        const add = sub[i].split("+").map(Number)

        for (let j = 0; j < add.length; j++) {
            temp += add[j]
        }

        if (sum == Number.MAX_SAFE_INTEGER) {
            sum = temp
        } else {
            sum -= temp
        }
    }

    console.log(sum)
}

rl.on("line", (line) => {
    solve(line)
    rl.close()
}).on("close", () => {
    process.exit()
})
