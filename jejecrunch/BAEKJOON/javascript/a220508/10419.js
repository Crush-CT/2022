const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    let i=0;

    for(;i+i*i<=input;i++){}

    console.log(i-1)
}
let count =0, N=0

rl.on("line", (line) => {
    if(count == 0) N=+line
    else solve(+line)
    count++
}).on("close", () => {
    process.exit()
})
