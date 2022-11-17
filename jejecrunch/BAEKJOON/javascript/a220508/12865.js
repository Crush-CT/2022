const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const data = []

function solve(input) {
    const [n, k] = input.shift(),
        dp = new Array(n + 1).fill(null).map((_) => new Array(k + 1).fill(0))

    const ting = [{ v: 0, w: 0 }]

    input.forEach((v) => {
        ting.push({ w: v[0], v: v[1] })
    })

    for (let i = 1; i <= n; i++) {
        // n개의 물건.
        for (let j = 1; j <= k; j++) {
            // k무게 까지.
            if (ting[i].w <= j) {
                // 가방에 물건을 넣을 수 있다.
                // (i번째 물건을 위해서 (i-1)번쨰 물건을 뺀다, i번째 물건을 넣지 않는다.)
                dp[i][j] = Math.max(ting[i].v + dp[i - 1][j - ting[i].w], dp[i - 1][j])
            } else if (ting[i].w > j) {
                // 가방에 물건을 넣을 수 없다.
                dp[i][j] = dp[i - 1][j]
            }
        }
    }
    console.log(dp[n][k])
}

rl.on("line", (line) => {
    data.push(line.split(" ").map(Number))
}).on("close", () => {
    solve(data)
    process.exit()
})
