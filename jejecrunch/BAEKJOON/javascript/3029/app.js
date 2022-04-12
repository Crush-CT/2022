const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const [c, t] = fs.readFileSync(filePath).toString().trim().split("\n")
const cur = c.split(":").map((v) => +v)
const thr = t.split(":").map((v) => +v)

if (cur[2] > thr[2]) {
    thr[1]--
    thr[2] += 60
}
if (cur[1] > thr[1]) {
    thr[0]--
    thr[1] += 60
}
if (cur[0] > thr[0]) {
    thr[0] += 24
}
let result = new Array()
if (cur.join("") === thr.join("")) {
    result = [24, 0, 0]
} else {
    for (let i = 0; i < 3; i++) {
        result.push(thr[i] - cur[i])
    }
}
result = result.map((v) => {
    if (parseInt(v) < 10) return "0" + v
    return +v
})
console.log(result.join(":"))
