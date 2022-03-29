const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"

const input = fs.readFileSync(filePath).toString().trim().split("\n")

const N = +input[0]
const arr = new Array(N).fill([], [])
for (let i = 1; i < input.length; i++) {
    const [age, name] = input[i].split(" ")
    arr[i - 1] = [+age, name]
}

const result = arr
    .sort((a, b) => {
        return a[0] < b[0] ? -1 : 0
    })
    .join("\n")
    .replaceAll(",", " ")

console.log(result)
