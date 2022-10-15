const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.on("line", (line) => {
    const check = line.search(/d2/gi)
    if (check > -1) console.log("D2")
    else console.log("unrated")

    process.exit()
})
