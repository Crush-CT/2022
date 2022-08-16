const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    const numCount = new Array(10).fill(0)
    let total = 0
    for (let i = 0; i < input.length; i++) {
        let n = parseInt(input.substring(i, i + 1))
        numCount[n] += 1
        total += n
    }

    if (!input.includes("0") || total % 3 != 0) {
        console.log("-1")
        return
    }

    let res = ""
    for (let i = 9; i >= 0; i--) {
        while (numCount[i] > 0) {
            res += i
            numCount[i]--
        }
    }
    console.log(res)
}

rl.on("line", (line) => {
    solve(line)
    process.exit()
})
