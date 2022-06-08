const readline = require("readline")

// 인터페이스 객체를 만들자.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let count = 0,
    N = 0,
    num = 1

function solve(str) {
    let result = ""
    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i) + 1
        if (code == 91) code = 65
        if (code == 123) code = 97

        result += String.fromCharCode(code)
    }
    console.log("String #" + num++ + "\n" + result + "\n")
}

rl.on("line", (line) => {
    if (count == 0) N = +line
    else if (count == N + 1) rl.close()
    else solve(line)
    count++
}).on("close", () => {
    process.exit()
})
