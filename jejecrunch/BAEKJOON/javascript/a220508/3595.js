const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(n) {
    let min = Number.MAX_SAFE_INTEGER,
        minIndex = 0

    for (let a = 1; a <= n; a++) {
        for (let b = 1; b <= n; b++) {
            if (a * b > n) break

            for (let c = 1; c <= n; c++) {
                if (a * b * c > n) break
                else if (a * b * c < n) continue
                else {
                    const size = a * b * 2 + a * c * 2 + c * b * 2
                    if (size < min) {
                        min = size
                        minIndex = c + " " + b + " " + a
                    }
                    break
                }
            }
        }
    }

    console.log(minIndex)
}
rl.on("line", (line) => {
    solve(+line)

    process.exit()
})
