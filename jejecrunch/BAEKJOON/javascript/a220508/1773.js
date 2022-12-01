const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let count = 0
const fire = new Array(2000001)

function solve(student) {
    for (let i = 0; i < N; ++i) {
        for (let j = student[i]; j <= C; j += student[i]) {
            fire[j] = 1
        }
    }

    for (let i = 0; i <= C; ++i) {
        if (fire[i] == 1) {
            ++count
        }
    }

    console.log(count)
}

let N, C
const data = []
rl.on("line", (line) => {
    if (!N && !C) [N, C] = line.split(" ").map(Number)
    else data.push(+line)
}).on("close", () => {
    solve(data)
})
