const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function cal(E, A) {
    let cnt = 0,
        result = ""
    while (E > A) {
        A *= 5
        cnt++
    }

    if (cnt == 0) return "no drought\n"

    for (let i = 0; i < cnt - 1; i++) result += "mega "
    return (result += "drought\n")
}

function solve(data) {
    for (let i = 0; i < N; i++) {
        console.log("Data Set " + (i + 1) + ":\n" + cal(data[i][0], data[i][1]))
    }
}

let count = 0,
    N = 0,
    data = []

rl.on("line", (line) => {
    if (count == 0) N = Number(line)
    else if (count == N + 1) rl.close()
    else {
        data.push(line.split(" ").map(Number))
    }
    count++
}).on("close", () => {
    solve(data)
    process.exit()
})
