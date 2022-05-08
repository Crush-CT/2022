function solve() {
    const fs = require("fs")
    const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
    const input = fs.readFileSync(filePath).toString().trim().split("\n")
    const arr = input.slice(0, input.length - 2).map((v) => {
        return v.split("").sort().join("")
    })

    for (let i = 0, j = 1; i < input.length - 3; i += 2, j++) {
        if (arr[i] === arr[i + 1]) {
            console.log("Case " + j + ": same")
        } else {
            console.log("Case " + j + ": different")
        }
    }
}

let start = new Date() // 시작
solve()
let end = new Date() // 종료
console.log(end - start) // 경과시간(밀리초)
