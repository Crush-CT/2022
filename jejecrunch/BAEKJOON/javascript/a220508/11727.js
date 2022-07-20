const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
const map = new Array(1001).fill(0, 0, 1).fill(1, 1, 2).fill(3, 2, 3)

for (let i = 3; i <= 1000; i++) {
    map[i] = (map[i - 1] + 2 * map[i - 2]) % 10007
}

function solve(data) {
    console.log(map[data] + "")
}
rl.on("line", (line) => {
    solve(+line)
    rl.close()
}).on("close", () => {
    process.exit()
})
