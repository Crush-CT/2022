const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    for(let i=0;i<input.length;i+=input[i][0]+1){
        const [n, d] = input[i]
        let ans = 0
        for(let j=i+1;j<n+i+1;j++){
            if(Math.floor(input[j][0]*input[j][1]/input[j][2]) >= d) ans++
        }

        console.log(ans)
    }

}

let count = 0,
    N = 0,
    data = []

rl.on("line", (line) => {
    if (count == 0) {
        N=+line
    } else {
        data.push(line.split(" ").map(Number))
    }
    count++
}).on("close", () => {
    solve(data)
    process.exit()
})
