const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(data) {
    const result = []
    for (let i = 0; i < data.length; i++) {
        if (data[i].indexOf("FBI") > -1) result.push(i + 1)
    }

    if (result.length == 0) console.log("HE GOT AWAY!")
    else console.log(result.join(" "))
}
const data = []
rl.on("line", (line) => {
    data.push(line)
}).on("close", () => {
    solve(data)
    process.exit()
})
