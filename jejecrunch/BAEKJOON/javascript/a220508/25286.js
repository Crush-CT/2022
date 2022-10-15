const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
let input = []
let N = 0

function solve(input) {
    const days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let res = ""
    for (let v of input) {
        if (v[1] == 1) console.log(v[0] - 1 + " 12 31")
        else {
            res = v[0] + " " + (v[1] - 1) + " "
            if (v[1] == 3 && ((v[0] % 100 != 0 && v[0] % 4 == 0) || v[0] % 400 == 0)) {
                res += 29
            } else {
                res += days[v[1] - 1]
            }

            console.log(res)
        }
    }
}

rl.on("line", (line) => {
    if (!N) N = +line
    else {
        input.push(line.split(" ").map(Number))
    }
}).on("close", () => {
    solve(input)
    process.exit()
})
