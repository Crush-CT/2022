const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((v) => v)
let result = new Array(4)

const A = input[0].split(" ").map((v) => BigInt(v)) // 가격
const per_A = getPermutations(A, 3)
const B = input[1].split(" ").map((v) => BigInt(v)) // 꿀 무게

while (per_A.length > 0) {
    const temp = per_A.shift()
    result.push(temp[0] * B[0] + temp[1] * B[1] + temp[2] * B[2])
}
console.log(result.sort((a, b) => (b - a).toString())[0].toString())

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
