const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve([s1, s2]) {
    let result = "",
        [n1, n2] = [s1, s2]

    result += Number(n1.replaceAll("6", "5")) + Number(n2.replaceAll("6", "5")) + " "
    result += Number(s1.replaceAll("5", "6")) + Number(s2.replaceAll("5", "6")) + " " + ""

    console.log(result)
}

rl.on("line", (line) => {
    solve(line.split(" "))
}).on("close", () => {
    process.exit()
})
