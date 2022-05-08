const readline = require("readline")

// 인터페이스 객체를 만들자.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const stack = []
let top = 0
let answer = ""

const cmdObj = {
    push: (x) => (stack[top++] = x),
    pop: () => {
        if (top) {
            top--
            return stack.splice(-1)
        } else return -1
    },
    size: () => top,
    empty: () => (!top ? 1 : 0),
    top: () => (top ? stack[top - 1] : -1),
}

function solve(input) {
    for (let i = 0; i < input.length; i++) {
        const [cmd, val] = input[i].split(" ")
        if (cmd == "push") cmdObj[cmd](Number(val))
        else answer += `${cmdObj[cmd]()}\n`
    }
    console.log(answer.trim())
}

let input = []
let count = 0
let N = 0

rl.on("line", (line) => {
    if (count == 0) {
        N = Number(line)
        count++
    } else {
        if (count === N + 1) rl.close()
        else {
            input.push(line)
            count++
        }
    }
})

rl.on("close", () => {
    solve(input)
    process.exit()
})
