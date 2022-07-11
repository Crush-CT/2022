const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    const [Ga, Gb] = [input[0][0]+input[0][2], input[0][1]+input[0][3]]
    const [Ea, Eb] =[input[1][0]+input[1][2], input[1][1]+input[1][3]]

    if(Ga-Ea+Gb-Eb === 0) {
        console.log("Tie")
    } else if(Ga-Ea+Gb-Eb > 0) {
        console.log("Gunnar")
    } else if(Ga-Ea+Gb-Eb < 0) {
        console.log("Emma")
    }
}

const data = []

rl.on("line", (line) => {
    data.push(line.split(" ").map(Number))
}).on("close", () => {
    solve(data)
    process.exit()
})
