const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let N = 0,
    S = 0,
    minLen = Number.MAX_SAFE_INTEGER,
    sum = 0,
    left = 0,
    right = 0
;(data = []), (ans = 0)

function solve() {
    for (left; left < N; left++) {
        while (sum < S && right < N) {
            sum += data[right++]
        }
        if (sum >= S) {
            minLen = Math.min(minLen, right - left)
        }
        sum -= data[left]
    }

    console.log(minLen === Number.MAX_SAFE_INTEGER ? 0 : minLen)
}

rl.on("line", (line) => {
    if (!N && !S) {
        ;[N, S] = line.split(" ").map(Number)
    } else {
        data = line.split(" ").map(Number)
    }
}).on("close", () => {
    solve()
    process.exit()
})
