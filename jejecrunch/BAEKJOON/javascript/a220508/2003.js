const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let N = 0,
    M = 0,
    left = 0,
    right = 0,
    sum = 0
;(data = []), (ans = 0)

function solve() {
    sum = data[left]

    while (left < N && right < N) {
        if (sum === M) {
            ans++
            sum += data[++right]
        } else if (sum < M) {
            sum += data[++right]
        } else if (sum > M) {
            sum -= data[left++]
        }
    }

    console.log(ans)
}

rl.on("line", (line) => {
    if (!N && !M) {
        ;[N, M] = line.split(" ").map(Number)
    } else {
        data = line.split(" ").map(Number)
    }
}).on("close", () => {
    solve()
    process.exit()
})
