const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(data) {
    let row = 0,
        col = 0
    const [A, B] = data
    for (let i = 0; i < A.length; i++) {
        const find = B.indexOf(A[i])
        if (find >= 0) {
            col = i
            row = find
            break
        }
    }
    const B_arr = B.split(""),
        A_arr = A.split("")

    let result = ""
    for (let i = 0; i < B.length; i++) {
        for (let j = 0; j < A.length; j++) {
            if (i === row) {
                result += A_arr[j]
            } else {
                if (j == col) result += B_arr[i]
                else result += "."
            }
        }
        result += "\n"
    }
    console.log(result.trim())
}

rl.on("line", (line) => {
    solve(line.split(" "))
    rl.close()
}).on("close", () => {
    process.exit()
})
