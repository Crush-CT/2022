const readline = require("readline")

// 인터페이스 객체를 만들자.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    const result = new Array()
    let swp,
        x,
        jud = 0
    const [A, B, C, D] = input.shift().split(" ")
    const arrive = input.shift().split(" ")
    for (let i = 0; i < arrive.length; i++) {
        ;(x = arrive[i]), (jud = 0), (swp = 0)
        while (1) {
            if (swp == 0) {
                x -= A
                if (x <= 0) {
                    jud++
                    break
                }
                swp = 1
            }
            if (swp == 1) {
                x -= B
                if (x <= 0) break
                swp = 0
            }
        }
        ;(x = arrive[i]), (swp = 0)
        while (1) {
            if (swp == 0) {
                x -= C
                if (x <= 0) {
                    jud++
                    break
                }
                swp = 1
            }
            if (swp == 1) {
                x -= D
                if (x <= 0) break
                swp = 0
            }
        }
        result.push(jud)
    }

    console.log(result.join("\n"))
}

let input = []
let N = 0
let count = 0

rl.on("line", (line) => {
    if (count == 3) rl.close()
    else {
        input.push(line)
        count++
    }
})

rl.on("close", () => {
    solve(input)
    process.exit()
})
