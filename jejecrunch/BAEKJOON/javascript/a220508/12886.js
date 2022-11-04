const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let inp

function solve(input) {
    const [a, b, c] = input.sort((a, b) => a - b)

    // 실패 조건
    if ((a + b + c) % 3 !== 0) {
        console.log(0)
        return
    }

    const visited = new Set([])
    visited.add(input.join(""))
    const queue = [input]

    // 처음에 재귀로 풀었지만, 스택 한도 초과 때문에 while 적용
    while (queue.length) {
        const [x, y, z] = queue.shift()

        // 성공 조건
        if (x === y && y === z) {
            console.log(1)
            return
        }

        // 돌 두 개 선택
        // visited 계산 미리해서 아예 큐에 넣지 않아야 시간초과 안남
        if (x < y) {
            const next = [x + x, y - x, z].sort((a, b) => a - b)
            const nextStr = next.join("")
            if (!visited.has(nextStr)) {
                visited.add(nextStr)
                queue.push(next)
            }
        }

        if (y < z) {
            const next = [x, y + y, z - y].sort((a, b) => a - b)
            const nextStr = next.join("")
            if (!visited.has(nextStr)) {
                visited.add(nextStr)
                queue.push(next)
            }
        }

        if (x < z) {
            const next = [x + x, y, z - x].sort((a, b) => a - b)
            const nextStr = next.join("")
            if (!visited.has(nextStr)) {
                visited.add(nextStr)
                queue.push(next)
            }
        }
    }

    console.log(0)
    return
}

rl.on("line", (line) => {
    inp = line.split(" ").map(Number)
}).on("close", () => {
    solve(inp)
    process.exit()
})
