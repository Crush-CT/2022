const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(n) {
    let result = 0
    while(n > 1){
        if(n%2==1) {
            n*=3;
            n++;
            result ++;
        } else if(n%2==0) {
            n/=2;
            result ++;
        }
    }
    console.log(result)
}

rl.on("line", (line) => {
    solve(+line)
    rl.close()
}).on("close", () => {
    process.exit()
})
