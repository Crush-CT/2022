const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
function solve(data) {
    const arr = new Array(4)
    let count = 0
    while (true) {
        if (data[0] === data[1] && data[1] === data[2] && data[2] === data[3]) break
        let temp = data[0]
        arr[0] = Math.abs(data[0] - data[1])
        arr[1] = Math.abs(data[1] - data[2])
        arr[2] = Math.abs(data[2] - data[3])
        arr[3] = Math.abs(data[3] - temp)
        data = arr
        count++
    }

    console.log(count)
}

rl.on("line", (line) => {
    if (line == "0 0 0 0") rl.close()
    else solve(line.split(" ").map(Number))
}).on("close", () => {
    process.exit()
})
