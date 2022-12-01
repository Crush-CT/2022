const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    const res = Array.from(input)
        .map((v) => {
            let num = v.charCodeAt(0)

            if (num >= 65 && num <= 90) {
                if (num >= 78) num -= 13
                else num += 13
            } else if (num >= 97 && num <= 122) {
                if (num >= 110) num -= 13
                else num += 13
            }

            return String.fromCharCode(num)
        })
        .join("")

    console.log(res)
}

rl.on("line", (line) => {
    solve(line)
}).on("close", () => {
    process.exit()
})
