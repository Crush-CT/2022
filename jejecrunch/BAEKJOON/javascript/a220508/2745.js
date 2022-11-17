const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    let ans = 0
    const [N, B] = input
    const n = N.split("").reverse()
    for (let i = n.length - 1; i >= 0; i--) {
        if (n[i] >= "A" && n[i] <= "Z") {
            n[i] = n[i].charCodeAt(0) - 55
            ans += n[i] * Math.pow(+B, i)
        } else {
            n[i] = Number(n[i])
            ans += n[i] * Math.pow(+B, i)
        }
    }

    console.log(ans)
}

let data = []
rl.on("line", (line) => {
    data = line.split(" ")
}).on("close", () => {
    solve(data)
    process.exit()
})
