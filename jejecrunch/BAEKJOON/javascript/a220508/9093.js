const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    const N = input.shift()

    input.forEach((v) => {
        const temp = v
            .split(" ")
            .map((v1) => Array.from(v1).reverse().join(""))
            .join(" ")

        console.log(temp)
    })
}

const data = []

rl.on("line", (line) => {
    data.push(line)
}).on("close", () => {
    solve(data)
    process.exit()
})
