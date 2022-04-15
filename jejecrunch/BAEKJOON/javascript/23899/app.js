const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath).toString().trim().split("\n").slice(1)

const A = input[0]
    .trim()
    .split(" ")
    .map((v) => +v)
const B = input[1]
    .trim()
    .split(" ")
    .map((v) => +v)

function selection_sort(A, B) {
    if (A.length == B.length && A.every((v, i) => v == B[i])) return true

    for (let i = A.length - 1; i > 0; --i) {
        let idx = i
        for (let j = 0; j < i; ++j) if (A[j] > A[idx]) idx = j
        ;[A[idx], A[i]] = [A[i], A[idx]]
        if (A.length == B.length && A.every((v, i) => v == B[i])) return true
    }
    return false
}

console.log(selection_sort(A, B) ? "1" : "0")
