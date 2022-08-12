const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(boxes, books) {
    let res = 0
    for (let book of books) {
        for (let i = 0; i < boxes.length; i++) {
            if (boxes[i] >= book) {
                boxes[i] -= book
                break
            } else {
                res += boxes[i]
                boxes[i] = 0
            }
        }
    }
    console.log(res + boxes.reduce((a, c) => a + c, 0))
}

let count = 0,
    boxes = [],
    books = [],
    N,
    M

rl.on("line", (line) => {
    if (count == 0) [N, M] = line.split(" ").map(Number)
    else if (count == 1) boxes = line.split(" ").map(Number)
    else if (count == 2) books = line.split(" ").map(Number)
    count++
}).on("close", () => {
    solve(boxes, books)
    process.exit()
})
