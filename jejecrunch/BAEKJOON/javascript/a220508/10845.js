const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(data) {
    const queue = []
    let answer = ""

    for (let i = 0; i < N; i++) {
        const command = input[i].split(" ")
        switch (command[0]) {
            case "push":
                queue.push(+command[1])
                break
            case "pop":
                answer += queue[0] ? queue.shift() : -1
                answer += "\n"
                break
            case "front":
                answer += queue[0] ? queue[0] : -1
                answer += "\n"
                break
            case "back":
                answer += queue[queue.length - 1] ? queue[queue.length - 1] : -1
                answer += "\n"
                break
            case "size":
                answer += queue.length
                answer += "\n"
                break
            case "empty":
                answer += queue.length ? 0 : 1
                answer += "\n"
                break
        }
    }
    console.log(answer.trim())
}

let count = 0,
    N = 0,
    input = []
rl.on("line", (line) => {
    if (count == 0) N = +line
    else input.push(line)
    count++
}).on("close", () => {
    solve(input)
    process.exit()
})
