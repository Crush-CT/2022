const readline = require("readline")

// 인터페이스 객체를 만들자.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    const clothes = []

    input.forEach((cloth) => {
        const [name, kind] = cloth.split(" ")
        if (!clothes[kind]) {
            clothes[kind] = []
        }
        clothes[kind].push(name)
    })

    let sum = 1
    for (const kind in clothes) {
        sum *= clothes[kind].length + 1
    }
    console.log(sum - 1)
}

let input = []
let cnt = 0
let count = 0
let clothes = 0

rl.on("line", (line) => {
    if (!count) {
        count = Number(line)
    } else {
        if (!isNaN(line - 0)) {
            clothes = Number(line)
            cnt++
            if (clothes === 0) {
                console.log(0)
            }
        } else {
            input.push(line)
            if (input.length === clothes) {
                solve(input)
                input = []

                if (cnt === count) {
                    rl.close()
                }
            }
        }
    }
})

rl.on("close", () => {
    process.exit()
})
