const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let N,
    K,
    answer = 1
const A = []

function solve(belt) {
    while (1) {
        // step 1.
        let temp
        for (let i = 2 * N; i >= 1; i--) {
            if (i === 2 * N) {
                temp = belt[2 * N]
                belt[i] = belt[i - 1]
            } else if (i === 1) belt[i] = temp
            else belt[i] = belt[i - 1]
        }
        // step 2.
        if (belt[N].robot === true) belt[N].robot = false
        for (let i = N; i >= 1; i--) {
            if (i !== 1) {
                if (belt[i].robot === false && belt[i].durability >= 1) {
                    if (belt[i - 1].robot === true) {
                        belt[i - 1].robot = false
                        belt[i].robot = true
                        belt[i].durability--
                        if (belt[i].durability === 0) K--
                        if (K === 0) {
                            console.log(answer)
                            return answer
                        }
                    }
                }
            }
        }
        if (belt[N].robot === true) belt[N].robot = false
        // step 3.
        if (belt[1].durability > 0) {
            belt[1].robot = true
            belt[1].durability--
            if (belt[1].durability === 0) K--
            if (K === 0) {
                console.log(answer)
                return answer
            }
        }

        answer++
    }
}

rl.on("line", (line) => {
    if (!N && !K) [N, K] = line.split(" ").map(Number)
    else A.push(line.split(" ").map(Number))
}).on("close", () => {
    let belt = [
        undefined,
        ...A[0].reduce((a, c) => {
            a.push({ robot: false, durability: c })
            return a
        }, []),
        ...A[0].reduce((a, c) => {
            a.push({ robot: false, durability: c })
            return a
        }, []),
    ]
    solve(belt)
    process.exit()
})
