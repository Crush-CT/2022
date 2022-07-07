const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(data) {
    let total = 210, ans = 0;
    for(let i=0;i<N;i++){
        const [t, z] = data[i]
        
        total-=Number(t)
        if(K==9) K=1;

        if(total <= 0 && ans == 0) {
            ans = K
            break
        } else {
            if(z == 'T') {
                K++;
            } 
        }

    }
    console.log(ans)
}

let count = 0,
    K = 0,
    N = 0,
    data = []

rl.on("line", (line) => {
    if (count == 0) K = Number(line)
    else if(count == 1) N=Number(line)
    else {
        data.push(line.split(" "))
    }
    count++
}).on("close", () => {
    solve(data)
    process.exit()
})
