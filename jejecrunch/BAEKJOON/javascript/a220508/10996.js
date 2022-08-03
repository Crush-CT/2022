const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(data) {
    for (let i = 0; i < data * 2; i++) {
        let res = ""
        if (i % 2 == 0)
            for (let j = 0; j < data; j++) {
                if (j % 2 == 0) res += "*"
                else if (j % 2 == 1) res += " "
            }
        else if (i % 2 == 1)
            for (let j = 0; j < data; j++) {
                if (j % 2 == 0) res += " "
                else if (j % 2 == 1) res += "*"
            }
        console.log(res)
    }
}

rl.on("line", (line) => {
    solve(line)
}).on("close", () => {
    process.exit()
})
