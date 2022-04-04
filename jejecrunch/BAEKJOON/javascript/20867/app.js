const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((v) => v)
const [M, S, G] = input
    .shift()
    .split(" ")
    .map((v) => +v)
const [A, B] = input
    .shift()
    .split(" ")
    .map((v) => +v)
const [L, R] = input
    .shift()
    .split(" ")
    .map((v) => +v)

const rs = M % S ? M / S + 1 : M / S
const lwait = L / A
const ls = M % G ? M / G + 1 : M / G
const rwait = R / B

if (ls + lwait < rs + rwait) console.log("friskus")
else console.log("latmask")
