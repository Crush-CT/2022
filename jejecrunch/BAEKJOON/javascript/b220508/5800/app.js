const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((v) => v)

const N = +input.shift()

for (let i = 1; i <= N; i++) {
    const arr = input
        .shift()
        .split(" ")
        .map((v) => +v)
        .splice(1)
        .sort((a, b) => b - a)
    const max = Math.max(...arr)
    const min = Math.min(...arr)
    const minus = new Array()
    for (let j = 1; j < arr.length; j++) {
        minus.push(Math.abs(arr[j] - arr[j - 1]))
    }
    const gap = Math.max(...minus)
    console.log("Class " + i)
    console.log("Max " + max + ", Min " + min + ", Largest gap " + gap)
}
