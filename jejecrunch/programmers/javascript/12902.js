function solution(n) {
    if (n % 2 !== 0) return 0

    const dp = new Array(n + 1).fill(0)
    dp[1] = 3
    dp[2] = 11
    let idx = Math.floor(n / 2)

    if (idx < 3) return dp[idx]

    for (let i = 3; i <= idx + 1; i++) {
        dp[i] =
            (3 * +dp[i - 1] + [...dp].slice(1, i - 1).reduce((a, c) => a + c) * 2 + 2) % 1000000007
    }

    return dp[idx]
}
