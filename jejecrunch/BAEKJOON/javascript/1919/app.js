const readline = require("readline")

// 인터페이스 객체를 만들자.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    let alpha = "abcdefghijklmnopqrstuvwxyz".split("")
    alpha = new Map(alpha.map((el, idx) => [el, idx]))

    let arr1 = Array(26).fill(0)
    let arr2 = Array(26).fill(0)

    for (let i = 0; i < input[0].length; i++) {
        arr1[alpha.get(input[0][i])]++
    }
    for (let i = 0; i < input[1].length; i++) {
        arr2[alpha.get(input[1][i])]++
    }

    let count = 0

    for (let i = 0; i < 26; i++) {
        if (arr1[i] !== arr2[i]) count += Math.abs(arr1[i] - arr2[i])
    }

    console.log(count)
}

let input = []
let count = 0

rl.on("line", (line) => {
    input.push(line)
    count++
    if (count == 2) rl.close()
})

rl.on("close", () => {
    solve(input)
    process.exit()
})
