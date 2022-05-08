const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath).toString().trim().split("\n")
const T = +input.shift()
const result = new Array()
while (input.length > 0) {
    const str = (+input.shift()).toString(2)
    let temp = ""
    str.split("")
        .reverse()
        .forEach((v, i) => {
            if (+v === 1) temp += i + " "
        })
    temp = temp.trim()
    result.push(temp)
}
console.log(result.join("\n"))
