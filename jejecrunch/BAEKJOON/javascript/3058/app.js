const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath).toString().trim().split("\n")
const T = +input.shift()
const result = new Array(T)
let str = ""
let i = 0
while (input.length > 0) {
    const arr = input.shift().split(" ")
    const temp = new Array()
    arr.forEach((v) => {
        if (v % 2 === 0) temp.push(+v)
    })
    result[i] = [temp.reduce((acc, cur) => acc + cur, 0), temp.sort((a, b) => a - b)[0]]
    str += result[i].join(" ") + "\n"
    i += 1
}
console.log(str.trim())
