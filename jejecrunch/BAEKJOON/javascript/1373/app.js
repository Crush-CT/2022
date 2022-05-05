const readline = require("readline")

// 인터페이스 객체를 만들자.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.on("line", (line) => {
    let answer = ""

    while (line.length >= 3) {
        answer = parseInt(line.slice(line.length - 3), 2).toString(8) + answer
        line = line.slice(0, line.length - 3)
    }

    if (line.length !== 0) {
        answer = parseInt(line, 2).toString(8) + answer
    }

    console.log(answer)
}).on("close", () => {
    process.exit()
})
