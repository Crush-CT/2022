const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((v) => v)

const arr1 = input
    .shift()
    .split(" ")
    .map((v) => +v)
const arr2 = input
    .shift()
    .split(" ")
    .map((v) => +v)

const score1 = arr1[0] * 6 + arr1[1] * 3 + arr1[2] * 2 + arr1[3] * 1 + arr1[4] * 2
const score2 = arr2[0] * 6 + arr2[1] * 3 + arr2[2] * 2 + arr2[3] * 1 + arr2[4] * 2

console.log(score1 + " " + score2)
