const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath).toString().trim().split("\n")
const [t1, v1] = input
    .shift()
    .split(" ")
    .map((v) => +v)
const [t2, v2] = input
    .shift()
    .split(" ")
    .map((v) => +v)

if (t2 < 0 && v2 >= 10)
    console.log("A storm warning for tomorrow! Be careful and stay home if possible!")
else if (t2 < t1) console.log("MCHS warns! Low temperature is expected tomorrow.")
else if (v2 > v1) console.log("MCHS warns! Strong wind is expected tomorrow.")
else console.log("No message")
