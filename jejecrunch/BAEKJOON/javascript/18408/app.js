const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"

const result = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map((v) => +v)
    .reduce((all, cur) => {
        all[cur] = (all[cur] || 0) + 1
        return all
    }, {})
let max_n = Math.max.apply(null, Object.values(result))
Object.keys(result).forEach(function (key) {
    if (result[key] === max_n) {
        console.log(key)
    }
})
