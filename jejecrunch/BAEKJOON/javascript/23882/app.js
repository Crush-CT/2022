const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((v) => v)

const [N, K] = input[0].split(" ").map((v) => +v)
const arr = input[1].split(" ").map((v) => +v)

function selection_sort(arr) {
    let idx,
        temp,
        result = -1
    let count = 0
    for (let i = arr.length; i > 0; i--) {
        // 가장 큰 값 찾기
        idx = i
        for (let j = 0; j <= i; j++) {
            if (arr[j] > arr[idx]) idx = j
        }
        if (i != idx) {
            count++
            temp = arr[idx]
            arr[idx] = arr[i]
            arr[i] = temp

            if (count == K) {
                result = arr.join(" ")
            }
        }
    }
    console.log(result)
}

selection_sort(arr)
