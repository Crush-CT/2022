const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(line) {
    let numbers = line.split("")
    const sumOfString = (acc, cur) => {
        acc = Number(acc)
        acc += Number(cur)
        return acc
    }

    while (numbers.length >= 2) {
        numbers = numbers.reduce(sumOfString).toString().split("")
    }
    console.log(numbers[0])
}
rl.on("line", (line) => {
    if (line === "0") process.exit()
    else solve(line)
})
