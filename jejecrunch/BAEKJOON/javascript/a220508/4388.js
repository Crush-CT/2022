const readline = require("readline")

// 인터페이스 객체를 만들자.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let result = []

rl.on("line", (line) => {
    let [A, B] = line.split(" ").map(Number)
    if (A == 0 && B == 0) rl.close()
    let t = 0,
        c = 0
    for (let i = 1; i < Math.max(A, B).toString().length + 1; i++) {
        let ta = (A % 10 ** i) / 10 ** (i - 1)
        let tb = (B % 10 ** i) / 10 ** (i - 1)
        if (ta + tb + t >= 10) {
            c++
            t = 1
        } else {
            t = 0
        }
    }
    result.push(c)
}).on("close", () => {
    console.log(result.join("\n"))
    process.exit()
})
