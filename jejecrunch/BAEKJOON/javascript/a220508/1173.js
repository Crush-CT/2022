const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    let time=0, [N, m, M, T, R] = input;
    let currentPulse = m;

    if(currentPulse + T > M) {
        console.log(-1)
        return;
    }

    for(let cnt = 0;cnt<N;){
        time++;
        if(currentPulse + T <= M){
            currentPulse += T;
            cnt++;
        }
        else {
            currentPulse -= R;
            if(currentPulse < m) currentPulse = m;
        }
    }
    console.log(time)
}

rl.on("line", (line) => {
    solve(line.split(" ").map(Number))
}).on("close", () => {
    process.exit()
})
