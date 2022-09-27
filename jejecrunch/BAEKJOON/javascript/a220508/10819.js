const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let count = 0
let N = 0,
    data

function getPermutations(arr, selectNumber) {
    const results = []
    if (selectNumber === 1) return arr.map((el) => [el])
    // n개중에서 1개 선택할 때(nP1), 바로 모든 배열의 원소 return. 1개선택이므로 순서가 의미없음.

    arr.forEach((fixed, index, origin) => {
        const rest = [...origin.slice(0, index), ...origin.slice(index + 1)]
        // 해당하는 fixed를 제외한 나머지 배열
        const permutations = getPermutations(rest, selectNumber - 1)
        // 나머지에 대해서 순열을 구한다.
        const attached = permutations.map((el) => [fixed, ...el])
        //  돌아온 순열에 떼 놓은(fixed) 값 붙이기
        results.push(...attached)
        // 배열 spread syntax 로 모두다 push
    })

    return results // 결과 담긴 results return
}

function solve(N) {
    const tmp = []
    const val = []
    const res = getPermutations(data, N)

    for (let i = 0; i < res.length; i++) {
        tmp.push([])
        for (let j = 1; j < res[i].length; j++) {
            tmp[i].push(Math.abs(res[i][j] - res[i][j - 1]))
        }
        val.push(tmp[i].reduce((a, c) => a + c))
    }

    console.log(Math.max(...val))
}

rl.on("line", (line) => {
    if (count === 0) N = +line
    else if (count === N + 1) rl.close()
    else data = line.split(" ").map(Number)
    count++
}).on("close", () => {
    solve(N)
    process.exit()
})
