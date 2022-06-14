const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    let sum = 0
    for (let i = 1; i < input; i++) if (input % i == 0) sum += i

    if (sum < input) console.log(input + " is a deficient number.\n")
    else if (sum == input) console.log(input + " is a perfect number.\n")
    else console.log(input + " is an abundant number.\n")
}
let count = 0
rl.on("line", (line) => {
    if (count == 0) {
    } else solve(+line)
    count++
}).on("close", () => {
    process.exit()
})
