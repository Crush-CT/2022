const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function dp(str) {
    if(str.length == 2) {
        console.log(str[0]+""+str[1]+"")
        return;
    }
    const d = []
    for(let i=1;i<str.length;i++) {
        d.push(Math.abs(str[i-1] + str[i])%10)
    }
    dp(d)
}

function solve(input) {
    const str = new Array(16)
    for(let i=0;i<2;i++){
        for(let j=0;j<8;j++){
            if(i%2==0) str[j*2] = +input[i][j]
            else str[j*2+1] = +input[i][j]
        }
    }

    dp(str)
}

const data = []

rl.on("line", (line) => {
    data.push(line.split(""))
}).on("close", () => {
    solve(data)
    process.exit()
})
