const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const [N, M] = fs.readFileSync(filePath).toString().trim().split(" ")

const arr = []

for (let i = 1; i <= N; i++) {
    arr.push(String(i))
}

function countBits(value) {
    let count = 0
    while (value > 0) {
        if ((value & 1) == 1) count++
        value = value >> 1
    }
    return count
}

function solve() {
    let answer = []
    for (let i = 0; i < 1 << N; i++) {
        if (countBits(i) == M) {
            let str = ""
            for (let j = 0; j < N; j++) {
                if (i & (1 << j)) str += arr[j] + " "
            }
            answer.push(str)
        }
    }

    answer.sort()
    for (let n = 0; n < answer.length; n++) {
        console.log(answer[n])
    }
}

solve()
