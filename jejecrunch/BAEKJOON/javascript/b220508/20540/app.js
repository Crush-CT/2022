const readline = require("readline")

// 인터페이스 객체를 만들자.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.on("line", (line) => {
    let result = ""
    line.split("").forEach((v, i) => {
        if (v == "E") result += "I"
        else if (v == "I") result += "E"

        if (v == "N") result += "S"
        else if (v == "S") result += "N"

        if (v == "T") result += "F"
        else if (v == "F") result += "T"

        if (v == "P") result += "J"
        else if (v == "J") result += "P"
    })

    console.log(result)
})

rl.on("close", () => {
    process.exit()
})
