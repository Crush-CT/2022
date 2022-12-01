const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

/**
 * solutionRecursion
 * 재귀로 백트래킹 하는 경우
 *
 * @param {string[]} board 8X8 체스판 정보
 * @returns {number} 탈출가능하면 1, 아니면 0
 */
const solutionRecursion = (board) => {
    const START = [7, 0]
    const EMPTY = "."
    const TOP_LINE = 0
    const NEWROW = ["........"]

    // 백트래킹으로 추적
    const bt = (cRow, cCol, currBoard, top) => {
        // 탈출 조건; 문제에서 원하는 도착점에 정확히 도착한 경우
        if (cRow === 0 && cCol === 7) return 1

        // 실패 조건
        // - 잘못된 좌표
        // - 이동한 현재 좌표에 벽 '#'이 있는 경우
        if (!currBoard[cRow] || currBoard[cRow][cCol] !== EMPTY) return 0

        // 탈출 조건2
        // - 살아남아서 가장 윗 줄에 왔거나, 벽이 모두 사라질 때까지 버틴 경우
        // - 정확한 도착점이 아니더라도 무조건 목적지 갈 수 있음
        if (cRow === 0) return 1
        if (cRow <= top) return 1

        // 다음 라운드, 보드 한 줄씩 아래로 이동
        const nextBoard = NEWROW.concat(currBoard.slice(0, -1))

        // 캐릭터 이동할 수 있는 모든 경우의 수
        const ways = [
            [-1, 0],
            [0, 1],
            [0, -1],
            [-1, -1],
            [-1, 1],
            [0, 0],
            [1, 0],
            [1, -1],
            [1, 1],
        ]
        for (const [nr, nc] of ways) {
            const nRow = cRow + nr
            const nCol = cCol + nc

            // 다음 좌표가 정상이고, 벽이 아니고, 다음 좌표에서 재귀적으로 탐색 가능한 경우
            if (
                currBoard[nRow] &&
                currBoard[nRow][nCol] === EMPTY &&
                bt(nRow, nCol, [...nextBoard], top + 1)
            )
                return 1
        }

        // 위에서 탐색 불가능한 경우 return false
        return 0
    }

    // 출발점에서 백트래킹 시작
    let [sRow, sCol] = START
    return bt(sRow, sCol, board, TOP_LINE)
}

const data = []

function solve(d) {
    console.log(solutionRecursion(d))
}

rl.on("line", (line) => {
    data.push(line.split(""))
}).on("close", () => {
    solve(data)
    process.exit()
})
