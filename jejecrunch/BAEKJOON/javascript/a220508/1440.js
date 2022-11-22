const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const getPermutations = function (arr, selectNumber) {
    const results = []
    if (selectNumber === 1) return arr.map((value) => [value]) // 1개씩 택할 때, 바로 모든 배열의 원소 return

    arr.forEach((fixed, index, origin) => {
        const rest = [...origin.slice(0, index), ...origin.slice(index + 1)] // 해당하는 fixed를 제외한 나머지 배열
        const permutations = getPermutations(rest, selectNumber - 1) // 나머지에 대해 순열을 구한다.
        const attached = permutations.map((permutation) => [fixed, ...permutation]) // 돌아온 순열에 대해 떼 놓은(fixed) 값 붙이기
        results.push(...attached) // 배열 spread syntax 로 모두다 push
    })

    return results // 결과 담긴 results return
}

function solve(input) {
    const list = getPermutations(input.split(":").map(Number), 3)

    let count = 0
    for (item of list) {
        if (
            1 <= item[0] &&
            item[0] <= 12 &&
            0 <= item[1] &&
            item[1] <= 59 &&
            0 <= item[2] &&
            item[2] <= 59
        )
            count += 1
    }
    console.log(count)
}

rl.on("line", (line) => {
    solve(line)
    process.exit()
})
