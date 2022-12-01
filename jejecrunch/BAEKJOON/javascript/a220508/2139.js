const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let specialYear, totalDay
const mArr = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30]

function solve([day, month, year]) {
    specialYear = 0
    if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
        specialYear = 1
    }

    totalDay = 0
    if (specialYear == 1 && month > 2) {
        ++totalDay
    }

    for (let i = 0; i < month; ++i) {
        totalDay += mArr[i]
    }

    totalDay += day

    console.log(totalDay)
}

rl.on("line", (line) => {
    if (line !== "0 0 0") solve(line.split(" ").map(Number))
})
