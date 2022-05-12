const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const factor = new Array(10000000).fill(-1, 0, 1)

for (let i = 2; i < 10000000; i++) {
    factor[i] = i
}

for (let i = 2; i * i < 10000000; i++) {
    if (factor[i] == i) {
        for (let j = i * i; j < 10000000; j += i) {
            if (factor[j] == j) factor[j] = i
        }
    }
}

function solve(n1, n2) {
    if (factor[n1] == n1 && factor[n2] == n2) console.log("Yes")
    else console.log("No")
}

rl.on("line", (line) => {
    const arr = line.split(" ")
    solve(arr[0], arr[1] + arr[0])
    rl.close()
}).on("close", () => {
    process.exit()
})
