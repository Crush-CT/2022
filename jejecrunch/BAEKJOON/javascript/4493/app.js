const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
// prettier-ignore
const input = fs.readFileSync(filePath).toString().trim().split("\n")
const t = +input.shift()
const result = new Array()
for (let i = 0; i < t; i++) {
    const n = +input.shift()
    const temp = new Array(n).fill(0)
    if (n > 1)
        for (let j = 0; j < n; j++) {
            const arr = input.shift().split(" ")
            if (arr[0] == "R" && arr[1] == "P") temp[1]++
            else if (arr[0] == "R" && arr[1] == "S") temp[0]++
            else if (arr[0] == "P" && arr[1] == "R") temp[0]++
            else if (arr[0] == "P" && arr[1] == "S") temp[1]++
            else if (arr[0] == "S" && arr[1] == "R") temp[1]++
            else if (arr[0] == "S" && arr[1] == "P") temp[0]++
        }
    else if (n == 1) {
        const arr = input.shift().split(" ")
        if (arr[0] == "R" && arr[1] == "P") result.push("Player 2")
        else if (arr[0] == "R" && arr[1] == "S") result.push("Player 1")
        else if (arr[0] == "R" && arr[1] == "R") result.push("TIE")
        else if (arr[0] == "P" && arr[1] == "R") result.push("Player 1")
        else if (arr[0] == "P" && arr[1] == "S") result.push("Player 2")
        else if (arr[0] == "P" && arr[1] == "P") result.push("TIE")
        else if (arr[0] == "S" && arr[1] == "R") result.push("Player 2")
        else if (arr[0] == "S" && arr[1] == "P") result.push("Player 1")
        else if (arr[0] == "S" && arr[1] == "S") result.push("TIE")
    }

    if (temp[0] > temp[1]) result.push("Player 1")
    else if (temp[0] < temp[1]) result.push("Player 2")
    else if (temp[0] === temp[1]) result.push("TIE")
}
console.log(result.join("\n"))
