const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const [N, M] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map((v) => +v)

if (M == 1 || M == 2) console.log("NEWBIE!")
else if (M <= N) console.log("OLDBIE!")
else console.log("TLE!")
