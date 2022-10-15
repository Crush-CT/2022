const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let T = 0,
    index = 0,
    input = []

function main() {
    for (let i = 0; i < T; i++) {
        const board_size = +input[index]
        const board = new Array(board_size)
        for (let j = 0; j < board.length; j++) board[j] = new Array(board_size).fill(0)

        const [start_x, start_y] = input[index + 1].split(" ").map(Number)
        const [end_x, end_y] = input[index + 2].split(" ").map(Number)

        board[start_x][start_y] = 1

        function bfs() {
            let L = 0
            const dx = [2, 2, -2, -2, 1, 1, -1, -1],
                dy = [1, -1, 1, -1, 2, -2, 2, -2],
                queue = []

            queue.push([start_x, start_y])

            while (queue.length) {
                const len = queue.length
                for (let i = 0; i < len; i++) {
                    const v = queue.shift()
                    if (v[0] === end_x && v[1] === end_y) return L

                    for (let j = 0; j < 8; j++) {
                        const [nx, ny] = [v[0] + dx[j], v[1] + dy[j]]
                        if (
                            nx >= 0 &&
                            nx < board_size &&
                            ny >= 0 &&
                            ny < board_size &&
                            board[nx][ny] === 0
                        ) {
                            board[nx][ny] = 1
                            queue.push([nx, ny])
                        }
                    }
                }

                L++
            }
        }

        console.log(bfs())
        index += 3
    }
}

rl.on("line", (line) => {
    if (!T) T = +line
    else input.push(line)
}).on("close", () => {
    main()
    process.exit()
})
