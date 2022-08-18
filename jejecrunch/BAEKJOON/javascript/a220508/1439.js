const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(data) {
    let zero = 0,
        one = 0
    if (data[0] === "0") zero++
    else one++

    for (let i = 0; i < data.length; i++) {
        if (data[i - 1] !== data[i]) {
            if (data[i] === "0") zero++
            else one++
        }
    }

    console.log(Math.min(zero, one))
}

rl.on("line", (line) => {
    solve(line.split(""))
}).on("close", () => {
    process.exit()
})
