const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    const res = input
        .replace(/(?:([a|e|i|o|u]{1})(p{1})([a|e|i|o|u{1}]))/g, /$1/)
        .replace(/\//g, "")
    console.log(res)
}
rl.on("line", (line) => {
    solve(line)
}).on("close", () => {
    process.exit()
})
