const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let count = 0,
    N = 0
const quater = {
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    axis: 0,
}

function solve(data) {
    if (data[0] == 0 || data[1] == 0) quater.axis += 1
    else if (data[0] > 0) {
        if (data[1] > 0) quater.one += 1
        else quater.four += 1
    } else if (data[0] < 0) {
        if (data[1] > 0) quater.two += 1
        else quater.three += 1
    }
}

rl.on("line", (line) => {
    if (count == 0) N = +line
    else if (count == N + 1) rl.close()
    else solve(line.split(" "))
    count++
}).on("close", () => {
    console.log(
        "Q1: " +
            quater.one +
            "\nQ2: " +
            quater.two +
            "\nQ3: " +
            quater.three +
            "\nQ4: " +
            quater.four +
            "\nAXIS: " +
            quater.axis
    )
    process.exit()
})
