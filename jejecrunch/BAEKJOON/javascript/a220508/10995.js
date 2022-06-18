const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    let result = ""
    if (input == 1) result += "*"
    else
        for (let i = 0; i < input; i++) {
            for (let j = 0; j < input; j++) {
                if (i % 2 == 0) result += "* "
                else result += " *"
            }
            result += "\n"
        }

    console.log(result)
}

rl.on("line", (line) => {
    solve(+line)
}).on("close", () => {
    process.exit()
})
