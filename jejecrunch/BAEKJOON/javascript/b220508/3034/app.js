const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath).toString().trim().split("\n")
const [N, W, H] = input.shift().split(" ")
while (input.length > 0) {
    let result = ""
    const len = input.shift()
    if (W ** 2 + H ** 2 >= len ** 2) result = "DA"
    else result = "NE"
    console.log(result)
}
