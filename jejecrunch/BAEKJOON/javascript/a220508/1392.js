const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(scores, questions) {
    for (let i = 1; i <= N; i++) {
        scores[i] += scores[i - 1]
    }

    for (let i = 0; i < Q; i++) {
        let q = questions[i]
        for (let j = 0; j < N; j++) {
            if (scores[j] > q) {
                console.log(j + 1)
                break
            }
        }
    }
}

let count = 0,
    N,
    Q,
    scores = [],
    questions = []

rl.on("line", (line) => {
    if (count == 0) [N, Q] = line.split(" ").map(Number)
    else if (count >= 1 && count <= N) scores.push(+line)
    else if (count >= N + 1 && count <= Q + N + 1) questions.push(+line)
    count++
}).on("close", () => {
    solve(scores, questions)
    process.exit()
})
