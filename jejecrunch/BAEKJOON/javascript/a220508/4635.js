const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let ans = -12918293812, N=0, temp=0

rl.on("line", (line) => {
    if (line == "-1") {console.log(ans+" miles");rl.close()}
    else {
        if(!isNaN(+line)){
            if(ans !== -12918293812) console.log(ans+" miles")
            N = +line
            ans = 0
            temp = 0
        } else {
            const arr = line.split(" ").map(Number);
            ans += (arr[1] - temp)*arr[0]
            temp = arr[1]
        }
    }

}).on("close", () => {
    process.exit()
})
