const readline = require("readline")

// 인터페이스 객체를 만들자.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function printSudoku() {
    for (let i = 0; i < 9; i++) {
        console.log(input[i].join(" "))
    }
}

function isValidPosition(x, y, num) {
    for (let i = 0; i < 9; i++) {
        if (input[x][i] === num || input[i][y] === num) return false
    }

    const areaLeftTopX = parseInt(x / 3) * 3
    const areaLeftTopY = parseInt(y / 3) * 3
    for (let i = areaLeftTopX; i < areaLeftTopX + 3; i++) {
        for (let j = areaLeftTopY; j < areaLeftTopY + 3; j++) {
            if (input[i][j] === num) return false
        }
    }
    return true
}

function playSudoku() {
    let x = -1,
        y = -1
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (input[i][j] === 0) {
                x = i
                y = j
                break
            }
        }
        if (x !== -1) break
    }
    if (x === -1) {
        printSudoku()
        process.exit()
    }
    for (let i = 1; i <= 9; i++) {
        if (isValidPosition(x, y, i)) {
            input[x][y] = i
            playSudoku()
            input[x][y] = 0
        }
    }
}

let input = []
let count = 0

rl.on("line", (line) => {
    input.push(line.split(" ").map((v) => +v))
    count++
    if (count == 9) rl.close()
})

rl.on("close", () => {
    playSudoku()
    process.exit()
})
