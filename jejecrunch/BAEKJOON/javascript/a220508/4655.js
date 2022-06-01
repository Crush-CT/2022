function solution(list) {
    list.forEach((v) => {
        let i = 2,
            t = 0
        while (t < v) {
            t += 1 / i
            i += 1
        }
        console.log(i - 2 + " card(s)")
    })
}

const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let input = []
rl.on("line", function (line) {
    if (line != "0.00") input.push(line)
}).on("close", function () {
    solution(input)
    process.exit()
})
