const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let count = 0, N=0, F=0

function solve(n, f){
    let start = Math.floor(n/100) * 100;

    let result
    for(let i=start; i<(start+100);i++){
        if(i%f==0) {
            result = i%100;
            break;
        }
    }

    return result;
}

rl.on("line", (line) => {
    if (count == 0) N = (line)
    else if (count == 1) F= (line)
    count++
}).on("close", () => {
    let res = solve(N, F) + ""
    if(res >= 0 && res < 10) res="0"+res
    console.log(res)
    process.exit()
})
