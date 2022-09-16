const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(data) {
    let N = 0

    for (let i = 0; i < data.length; i++) {
        if (i % 2 == 0) {
            N = +data[i]
        } else {
            let mary = data[i].split(" ").filter((v) => v === "0").length
            console.log("Mary won " + mary + " times and John won " + (N - mary) + " times")
        }
    }
}

const data = []

rl.on("line", (line) => {
    data.push(line)
}).on("close", () => {
    solve(data.slice(0, data.length - 1))
    process.exit()
})
