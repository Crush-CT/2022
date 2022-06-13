const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    let result = 0
    const arr = input.split("").map(Number)

    for (let i = 0; i < arr.length; i++) {
        result += Math.pow(arr[i], 5)
    }
    console.log(result)
}

rl.on("line", (line) => {
    solve(line)
}).on("close", () => {
    process.exit()
})
