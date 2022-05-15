const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
let input = []

function solve() {
    input.shift()
    let result = [],
        carCost,
        option,
        i = 0

    while (1) {
        if (!input.includes(" ")) {
            carCost = +input[i++]
            option = +input[i++]
        }

        for (let j = 1; j <= option; j++) {
            let cost = input[i++].split(" ")
            carCost += +cost[0] * +cost[1]
        }

        console.log(carCost)
        if (i >= input.length) break
    }
}

rl.on("line", (line) => {
    input.push(line)
}).on("close", () => {
    solve()
    process.exit()
})
