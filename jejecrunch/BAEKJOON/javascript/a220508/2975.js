const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(data) {
    let result = 0
    if (data[1] == "W") result = +data[0] - +data[2]
    else if (data[1] == "D") result = +data[0] + +data[2]

    if (result < -200) console.log("Not allowed")
    else console.log(result)
}

rl.on("line", (line) => {
    if (line == "0 W 0") rl.close()
    else solve(line.split(" "))
}).on("close", () => {
    process.exit()
})
