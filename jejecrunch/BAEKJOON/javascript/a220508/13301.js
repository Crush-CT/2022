const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const map = new Array(91).fill(0, 0, 1).fill(1, 1, 2);

function solve(data) {
    for(let i=2;i<=data;i++) {
        map[i] = BigInt(map[i-1])+BigInt(map[i-2]);
    }
    console.log(map[data]*2n+(map[data-1]+map[data])*2n+"")
}
rl.on("line", (line) => {
    solve(+line)
    rl.close()
}).on("close", () => {
    process.exit()
})
