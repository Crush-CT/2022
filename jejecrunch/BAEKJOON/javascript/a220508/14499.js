const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const dice = {
    top: 0,
    bot: 0,
    right: 0,
    left: 0,
    front: 0,
    back: 0,
}

const move = (num) => {
    const { top, right, left, bot, front, back } = dice
    let arr = []
    switch (num) {
        case 1: {
            arr = [left, top, right, bot, front, back]
            break
        }
        case 2: {
            arr = [right, bot, left, top, front, back]
            break
        }
        case 3: {
            arr = [front, right, back, left, bot, top]
            break
        }
        case 4: {
            arr = [back, right, front, left, top, bot]
            break
        }
    }
    dice.top = arr[0]
    dice.right = arr[1]
    dice.bot = arr[2]
    dice.left = arr[3]
    dice.front = arr[4]
    dice.back = arr[5]
}

const dx = [0, 0, -1, 1],
    dy = [1, -1, 0, 0]

function solve(x, y) {
    for (const c of command) {
        const nx = x + dx[+c - 1],
            ny = y + dy[+c - 1]

        if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue

        move(c)

        if (data[nx][ny] === 0) data[nx][ny] = dice.bot
        else {
            dice.bot = data[nx][ny]
            data[nx][ny] = 0
        }

        console.log(dice.top)
        ;(x = nx), (y = ny)
    }
}

let N = 0,
    M = 0,
    x,
    y,
    K,
    command
const data = []

rl.on("line", (line) => {
    if (!N && !M && !x && !y && !K) [N, M, x, y, K] = line.split(" ").map(Number)
    else {
        data.push(line.split(" ").map(Number))
    }
}).on("close", () => {
    command = [...data.pop()]
    solve(x, y)
    process.exit()
})
