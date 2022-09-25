const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(str, cnt) {
    if (cnt == N) {
        answer.push(str)
        return
    } else {
        const last = str[cnt]
        if (data[cnt] == ">") {
            for (let i = 0; i < 10; i++) {
                if (!str.includes(`${i}`) && last > i) {
                    solve(str + `${i}`, cnt + 1)
                }
            }
        } else {
            for (let i = 0; i < 10; i++) {
                if (!str.includes(`${i}`) && last < i) {
                    solve(str + `${i}`, cnt + 1)
                }
            }
        }
    }
}

let count = 0
let N = 0
let data = []
const answer = []

rl.on("line", (line) => {
    if (count == 0) N = +line
    else if (count == N + 1) rl.close()
    else data = line.split(" ")
    count++
}).on("close", () => {
    for (let i = 0; i < 10; i++) {
        solve(`${i}`, 0)
    }
    console.log(answer.pop() + "\n" + answer.shift())
    process.exit()
})
