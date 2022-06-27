const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let count = 0, val = new Array(), order=""

function solve() {
    let result = []
    const arr = val[0]
    if(order == "ABC") result = [arr[0], arr[1], arr[2]]
    else if(order == "ACB") result = [arr[0], arr[2], arr[1]]
    else if(order == "BAC") result = [arr[1], arr[0], arr[2]]
    else if(order == "BCA") result = [arr[1], arr[2], arr[0]]
    else if(order == "CAB") result = [arr[2], arr[0], arr[1]]
    else if(order == "CBA")  result = [arr[2], arr[1], arr[0]]

    console.log(result.join(" "))

}

rl.on("line", (line) => { if(count == 0) val.push(line.split(" ").map(Number).sort((a, b) => a-b))
    else if(count == 1) order=(line)
    else if (count == 2) rl.close()
    count++
}).on("close", () => {
    solve();
    process.exit()
})
