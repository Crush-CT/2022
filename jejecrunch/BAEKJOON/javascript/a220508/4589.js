const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(data) {
    let result = false

    const arr = [...data].sort((a, b) => a - b)
    for (let i = 0; i < data.length; i++) {
        if (arr[i] == data[i]) result = true
        else {
            result = false
            break
        }
    }
    if (!result) {
        const arr2 = [...data].sort((a, b) => b - a)
        for (let i = 0; i < data.length; i++) {
            if (arr2[i] == data[i]) result = true
            else {
                result = false
                break
            }
        }
    }

    if (result) console.log("Ordered")
    else console.log("Unordered")
}

let count = 0,
    N = 0
rl.on("line", (line) => {
    if (count == 0) {
        N = +line
        console.log("Gnomes:")
    } else if (count == N + 1) rl.close()
    else {
        solve(line.split(" "))
    }
    count++
}).on("close", () => {
    process.exit()
})
