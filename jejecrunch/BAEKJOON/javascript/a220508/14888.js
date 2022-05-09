const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let op = []
let A = []
let N = 0
let count = 0
let mymin = 1000000001
let mymax = -1000000001

function dfs(cnt, val) {
    const originVal = val //다시 초기화 할 때 사용.

    if (cnt == N - 1) {
        //탈출조건. 연산을 모두 했으면 최대 최소 비교
        if (val > mymax) mymax = val
        if (val < mymin) mymin = val
        return
    } else {
        for (let i = 0; i < 4; i++) {
            if (op[i] > 0) {
                switch (i) {
                    case 0:
                        val += A[cnt + 1]
                        break
                    case 1:
                        val -= A[cnt + 1]
                        break
                    case 2:
                        val *= A[cnt + 1]
                        break
                    case 3:
                        if (val >= 0) {
                            val = Math.floor(val / A[cnt + 1])
                        } else {
                            val = Math.floor((-1 * val) / A[cnt + 1])
                            if (val > 0) val = val * -1 // -0이 나올 수도 있기 때문에
                        }
                        break
                }

                op[i]--
                dfs(cnt + 1, val)
                val = originVal
                op[i]++
            }
        }
    }
    return
}

rl.on("line", (line) => {
    if (count == 0) N = Number(line)
    else if (count == 1) A = line.split(" ").map(Number)
    else {
        op = line.split(" ").map(Number)
        rl.close()
    }
    count++
}).on("close", () => {
    dfs(0, A[0])
    console.log(`${mymax}\n${mymin}`)
    process.exit()
})
