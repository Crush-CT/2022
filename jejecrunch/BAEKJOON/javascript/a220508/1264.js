const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    let cnt = 0
    input.split("").forEach((v, i) => {
        if (
            v.toLowerCase() == "a" ||
            v.toLowerCase() == "e" ||
            v.toLowerCase() == "i" ||
            v.toLowerCase() == "o" ||
            v.toLowerCase() == "u"
        )
            cnt++
    })
    console.log(cnt)
}

rl.on("line", (line) => {
    if (line == "#") rl.close()
    else solve(line)
}).on("close", () => {
    process.exit()
})
