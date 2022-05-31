const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const primes = new Array(1050)

for (let i = 2; i < 32; i++) {
    for (let j = i * 2; j < 1059; j += i) {
        primes[j] = 1
    }
}

function solve(data) {
    let total = 0
    data.split("").map((v, i) => {
        const code = v.charCodeAt(0)
        if (code >= 97 && code <= 122) total += code - 96
        else if (code >= 65 && code <= 90) total += code - 38
    })
    let check = false

    for (let i = 2; i <= total; i++) {
        if (i < total && total % i == 0) {
            break
        }

        if (i == total && total % i == 0) {
            check = true
        }
    }

    if (check || total == 1) return console.log("It is a prime word.")
    else return console.log("It is not a prime word.")
}

rl.on("line", (line) => {
    solve(line)
}).on("close", () => {
    process.exit()
})
