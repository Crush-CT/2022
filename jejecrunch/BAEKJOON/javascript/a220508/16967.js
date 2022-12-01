const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let H, W, X, Y, A
const B = []

function solve() {
    for (let i = 0; i < H + X; i++) {
        for (let j = 0; j < W + Y; j++) {
            if (i < X && j < W) {
                // 위쪽 안겹치는 거
                A[i][j] = B[i][j]
            } else if (j >= Y && i >= X && j < W && i < H) {
                //겹치는 거
                A[i][j] = B[i][j] - A[i - X][j - Y]
            } else if (j < Y && i < H) {
                // 왼쪽 안겹치는 거
                A[i][j] = B[i][j]
            }
        }
    }

    console.log(A.map((v) => v.join(" ")).join("\n"))
}
rl.on("line", (line) => {
    if (!H && !W && !X && !Y) [H, W, X, Y] = line.split(" ").map(Number)
    else B.push(line.split(" ").map(Number))
}).on("close", () => {
    A = Array.from({ length: H }, () => Array(W).fill(0))
    solve()
    process.exit()
})
