const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve([pre, sec]) {
    let res = ""
    let idx = 0

    for (let i = 0; i < pre.length; i++) {
        if (pre[i] == " ") res += " "
        else if (pre.charCodeAt(i) - sec.charCodeAt(idx) <= 0)
            res += String.fromCharCode(
                pre.charCodeAt(i) - sec.charCodeAt(idx) - 1 + 26 + "a".charCodeAt(0)
            )
        else
            res += String.fromCharCode(
                pre.charCodeAt(i) - sec.charCodeAt(idx) - 1 + "a".charCodeAt(0)
            )

        idx = (idx + 1) % sec.length
    }

    console.log(res)
}

const data = []

rl.on("line", (line) => {
    data.push(line)
}).on("close", () => {
    solve(data)
    process.exit()
})
