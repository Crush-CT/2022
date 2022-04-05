const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath).toString().trim().split("\n")
const handles = new Array()
let [N, I] = input
    .shift()
    .split(" ")
    .map((v) => +v)
while (N > 0) {
    handles.push(input.shift())
    N--
}
handles.sort()
console.log(handles[I - 1])
