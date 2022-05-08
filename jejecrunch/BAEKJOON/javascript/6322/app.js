const readline = require("readline")

// 인터페이스 객체를 만들자.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    let result = ""
    const icons = ["a", "b", "c"]
    for (let i = 0; i < input.length; i++) {
        result += "Triangle #" + (i + 1) + "\n"
        if (input[i][2] == -1) {
            result += icons[2] + " = " + Math.sqrt(input[i][0] ** 2 + input[i][1] ** 2).toFixed(3)
        } else if (Math.max(input[i][0], input[i][1]) >= input[i][2]) {
            result += "Impossible."
        } else if (input[i][0] == -1) {
            result += icons[0] + " = " + Math.sqrt(input[i][2] ** 2 - input[i][1] ** 2).toFixed(3)
        } else if (input[i][1] == -1) {
            result += icons[1] + " = " + Math.sqrt(input[i][2] ** 2 - input[i][0] ** 2).toFixed(3)
        }
        result += "\n\n"
    }

    console.log(result.trim())
}

let input = []

rl.on("line", (line) => {
    if (line === "0 0 0") rl.close()
    else {
        input.push(line.split(" "))
    }
})

rl.on("close", () => {
    solve(input)
    process.exit()
})
