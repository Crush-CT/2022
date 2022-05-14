const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
let count = 0,
    N = 0,
    result = [],
    i = 1

rl.on("line", (line) => {
    if (count == 0) N = Number(line)
    else if (count == N + 1) rl.close()
    else
        result.push(
            "Case " +
                i++ +
                ": " +
                line
                    .split(" ")
                    .map(Number)
                    .reduce((a, c) => a + c, 0)
        )
    count++
}).on("close", () => {
    console.log(result.join("\n"))
    process.exit()
})
