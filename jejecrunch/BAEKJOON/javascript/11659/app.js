const readline = require("readline")

// 인터페이스 객체를 만들자.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    const cumsum = new Array(arr.length + 1).fill(0)
    const output = []

    arr.forEach((v, i) => {
        cumsum[i + 1] = cumsum[i] + v
    })

    input.forEach((ij) => {
        const [i, j] = [ij[0], ij[1]]
        output.push(cumsum[j] - cumsum[i - 1])
    })

    console.log(output.join("\n"))
}

let arr = []
let input = []
let count = 0
let N, M

rl.on("line", (line) => {
    if (count === 0) {
        ;[N, M] = line.split(" ").map((v) => +v)
        count++
    } else if (count === 1) {
        arr = line.split(" ").map((v) => +v)
        count++
    } else if (count === M + 1) {
        rl.close()
    } else {
        input.push(line.split(" ").map((v) => +v))
    }
})

rl.on("close", () => {
    solve(input)
    process.exit()
})
