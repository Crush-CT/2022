const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(data) {
    let result = ""
    for (let i = 0; i < data.length; i++) {
        if (
            data[i].charCodeAt(0) >= "A".charCodeAt(0) &&
            data[i].charCodeAt(0) <= "Z".charCodeAt(0)
        ) {
            result += data[i].toLowerCase()
        } else if (
            data[i].charCodeAt(0) >= "a".charCodeAt(0) &&
            data[i].charCodeAt(0) <= "z".charCodeAt(0)
        ) {
            result += data[i].toUpperCase()
        }
    }
    console.log(result)
}
rl.on("line", (line) => {
    solve(line)
    rl.close()
}).on("close", () => {
    process.exit()
})
