const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath).toString().trim().split("\n")

let arr = new Array(input.length)
let i = 0

while (input.length > 0) {
    const int = input
        .shift()
        .split(" ")
        .map((v) => +v)

    const a_cnt = int.filter((v) => v == 0).length
    const b_cnt = int.filter((v) => v == 1).length

    if (a_cnt === b_cnt) {
        arr[i] = "B"
    } else if (a_cnt < b_cnt) {
        if (b_cnt == 3) arr[i] = "A"
        else if (b_cnt == 4) arr[i] = "E"
    } else if (a_cnt > b_cnt) {
        if (a_cnt == 3) arr[i] = "C"
        else if (a_cnt == 4) arr[i] = "D"
    }

    i++
}

console.log(arr.join("\n"))
