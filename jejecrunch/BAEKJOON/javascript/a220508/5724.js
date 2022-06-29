const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.on("line", (line) => {
    if(line == "0")rl.close()
    else {
        let ans = 0
        for(let i=+line;i>0;i--){
            ans += i * i
        }
        console.log(ans)
    }
    
}).on("close", () => {
    process.exit()
})
