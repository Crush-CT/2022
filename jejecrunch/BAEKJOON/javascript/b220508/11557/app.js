const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((v) => v)

const T = +input[0]
for (let i = 1; i < input.length; i++) {
    if (input[i].match("^[0-9]*$")) {
        let arr = {}

        for (let j = i + 1; j < +input[i] + i + 1; j++) {
            const key = input[j].split(" ")[0]
            const value = input[j].split(" ")[1]
            arr[key] = value
        }

        var sortable = []
        for (var key in arr) {
            sortable.push([key, arr[key]])
        }

        sortable.sort(function (a, b) {
            return b[1] - a[1]
        })

        console.log(sortable[0][0])
    }
}
