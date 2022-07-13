const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const dic = [3, 2, 1, 2, 3, 3, 2, 3, 3, 2, 2, 1, 2, 2, 1, 2, 2, 2, 1, 2, 1, 1, 1, 2, 2, 1]

function dp(str) {
    if(str.length == 2) {
        console.log('%s',str[0]+""+str[1])
        return;
    }
    const d = []
    for(let i=1;i<str.length;i++) {
        d.push(Math.abs(str[i-1] + str[i])%10)
    }
    dp(d)
}

function solve(input) {
    const str = new Array(input[0].length+input[1].length)
    
    for(let i=0;i<input.length;i++){
        for(let j=0;j<input[i].length;j++){
            if(i%2==0) str[j*2] = dic[input[i][j].charCodeAt(0) - 65]
            else str[j*2+1] = dic[input[i][j].charCodeAt(0) - 65]
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
