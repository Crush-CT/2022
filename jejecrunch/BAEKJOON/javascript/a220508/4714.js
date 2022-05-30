const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(data) {
    console.log(
        "Objects weighing " +
            data.toFixed(2) +
            " on Earth will weigh " +
            (data * 0.167).toFixed(2) +
            " on the moon."
    )
}
rl.on("line", (line) => {
    if (line == "-1.0") rl.close()
    solve(+line)
}).on("close", () => {
    process.exit()
})
