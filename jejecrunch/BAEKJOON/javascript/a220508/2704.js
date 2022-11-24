const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    const N = input.shift()
    const binary = new Array(N[0]).fill(new Array(3))

    for (let i = 0; i < N; i++) {
        input[i].forEach((v, j) => {
            let trans = v.toString(2)
            while (trans.length < 6) {
                trans = "0" + trans
            }
            binary[i][j] = trans
        })

        let row = ""

        for (let j = 0; j < 6; j++) {
            for (let k = 0; k < 3; k++) {
                row += binary[i][k][j]
            }
        }
        console.log(row, binary[i].join(""))
    }
}

const data = []

rl.on("line", (line) => {
    data.push(line.split(":").map(Number))
}).on("close", () => {
    solve(data)
    process.exit()
})
