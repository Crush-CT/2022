const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let N, M, R
const data = [],
    dx = [0, 1, 0, -1],
    dy = [1, 0, -1, 0]

function print() {
    console.log(
        data
            .map((v) => v.join(" "))
            .join("\n")
            .trim()
    )
}

function rotate(start, len) {
    // 나누기 연산을 사용하여 반복되는 반복을 최소화 해준다.
    let cir = R % len

    // 새롭게 구해낸 회전 횟수 만큼 회전시킴
    for (let t = 0; t < cir; t++) {
        let temp = data[start][start] // 마지막에 넣을 값 미리 빼놓음

        let idx = 0 // 다음 값 탐색할 인덱스

        let x = start
        let y = start

        while (idx < 4) {
            let nx = x + dx[idx]
            let ny = y + dy[idx]

            if (nx >= start && ny >= start && nx < N - start && ny < M - start) {
                data[x][y] = data[nx][ny]
                x = nx
                y = ny
            } else {
                idx++
            }
        }
        data[start + 1][start] = temp // 마지막에 미리 빼놨던 값 넣엊둠
    }
}

function solve() {
    // 회전시켜야하는 덩어리 수 만큼 반복
    let nN = N
    let nM = M
    for (let i = 0; i < Math.floor(Math.min(M, N) / 2); i++) {
        /*
         * i : 회전을 시작할 좌표
         * 2*N + 2*M - 4 : 처음엔 가장 겉 테두리의 갯수, 그 다음엔 각 변 길이가 2씩 줄도록 해서 넣어줌
         */
        rotate(i, 2 * nN + 2 * nM - 4)
        nN -= 2
        nM -= 2
    }

    print()
}

rl.on("line", (line) => {
    if (!N && !M && !R) [N, M, R] = line.split(" ").map(Number)
    else {
        data.push(line.split(" ").map(Number))
    }
}).on("close", () => {
    solve()
    process.exit()
})
