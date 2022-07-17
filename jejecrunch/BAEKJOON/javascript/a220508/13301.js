const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const map = new Array(82).fill(0n, 0, 1).fill(1n, 1, 2);

for(let i=2;i<=82;i++) {
    map[i] = BigInt(map[i-1])+BigInt(map[i-2]);
}

function solve(n) {
    console.log((map[n-1]+map[n]*2n)*2n+"")
}
rl.on("line", (line) => {
    solve(+line)
    rl.close()
}).on("close", () => {
    process.exit()
})
