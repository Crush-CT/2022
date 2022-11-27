const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    const [N, K] = input.shift()
    const rooms = new Array(13).fill(0)

    for (let i = 0; i < input.length; i++) {
        rooms[input[i][0] ? input[i][1] + 6 : input[i][1]]++
    }

    const roomsArr = rooms.map((el) => Math.ceil(el / K))
    console.log(roomsArr.reduce((prev, curr) => prev + curr, 0))
}

const data = []

rl.on("line", (line) => {
    data.push(line.split(" ").map(Number))
}).on("close", () => {
    solve(data)
    process.exit()
})
