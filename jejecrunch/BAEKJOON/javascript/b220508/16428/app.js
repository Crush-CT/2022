const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const [A, B] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map((v) => BigInt(v))
const result = [A / B, A % B]

if (A < 0n && B > 0n) {
    // 음 양
    if (A % B != 0n) {
        result[0] = A / B - 1n
        result[1] = (A % B) + B
    }
} else if (A < 0n && B < 0n) {
    // 음 음
    if (A % B != 0n) {
        result[0] = A / B + 1n
        result[1] = (A % B) - B
    }
}
console.log(result.join("\n"))
