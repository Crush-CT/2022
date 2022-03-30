const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((v) => v)

const [N, K] = input
    .shift()
    .split(" ")
    .map((v) => +v)
const arr = input
    .shift()
    .split(" ")
    .map((v) => +v)

function bubble_sort(arr) {
    let result = -1
    let count = 0

    for (let i = 0; i < arr.length - 1; i++) {
        let temp
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j + 1] < arr[j]) {
                count++
                temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp

                if (count == K) {
                    result = arr[j] + " " + arr[j + 1]
                }
            }
        }
        if (!temp) break
    }
    console.log(result)
}

bubble_sort(arr)
