const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve() {
    let gan_total = 0, sa_total = 0
    for (let i = 0, j = 1; i < N*2; i+=2) {
        gan_total = data[i][0] + data[i][1]*2 + data[i][2]*3 + data[i][3]*3 + data[i][4]*4 + data[i][5]*10
        sa_total = data[i+1][0] + data[i+1][1]*2 + data[i+1][2]*2 + data[i+1][3]*2 + data[i+1][4]*3 + data[i+1][5]*5 + data[i+1][6]*10

        if(gan_total > sa_total) {
            console.log("Battle "+j+++": Good triumphs over Evil")
        } else if(gan_total == sa_total) {
            console.log("Battle "+j+++": No victor on this battle field")
        } else {
            console.log("Battle "+j+++": Evil eradicates all trace of Good")
        }
    }
}

let count = 0,
    N = 0,
    data = []
rl.on("line", (line) => {
    if (count == 0) {
        N = line.split(" ").map(Number)
    } else {
        data.push(line.split(" ").map(Number))
    }
    count++
}).on("close", () => {
    solve()
    process.exit()
})
