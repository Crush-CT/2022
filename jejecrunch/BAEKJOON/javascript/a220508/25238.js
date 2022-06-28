function solve(n) {
    const defencePoint = n[0]
    const defencePenetrationPercentage =n[1]
    let isDamage = true;
    if(defencePoint*(100 - defencePenetrationPercentage)>= 10000) isDamage=false

    console.log(isDamage?1:0)
}

const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.on("line", function (line) {
    solve(line.split(" ").map(Number))
    rl.close()
}).on("close", function () {
    process.exit()
})
