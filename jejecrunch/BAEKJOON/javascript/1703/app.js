const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath).toString().trim().split("\n")
const arr = input.slice(0, input.length - 1)
let tree,
    result = new Array()
while (arr.length > 0) {
    tree = 1
    const t = arr
        .shift()
        .split(" ")
        .map((v) => +v)
    const N = t.shift()
    t.forEach((v, i) => {
        if (i % 2 == 0) tree *= v
        else tree -= v
    })

    result.push(tree)
}

console.log(result.join("\n"))
