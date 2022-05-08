const readline = require("readline")

// 인터페이스 객체를 만들자.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let N = 0
let count = 0
let A = 0,
    B = 0

rl.on("line", (line) => {
    if (count == 0) {
        N = line.trim()
        count++
    } else {
        if (count > N) rl.close()
        else {
            const [a, b] = line.split(" ").map((v) => +v)
            if (a > b) A++
            else if (b > a) B++
        }
        count++
    }
}).on("close", () => {
    console.log(A + " " + B)
    process.exit()
})
