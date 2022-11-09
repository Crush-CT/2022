const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve() {
    if (s === t) return 0
    if (t === 0) return "-"

    const memo = new Set()
    const queue = [
        { now: s * s, str: "*" },
        { now: s + s, str: "+" },
        { now: 1, str: "/" },
    ]

    while (queue.length > 0) {
        const { now, str } = queue.shift()
        if (now === t) {
            return str
        }
        if (memo.has(now)) {
            continue
        }
        memo.add(now)

        if (now * now <= t) queue.push({ now: now * now, str: `${str}*` })
        if (now + now <= t) queue.push({ now: now + now, str: `${str}+` })
    }
    return -1
}

let s, t

rl.on("line", (line) => {
    ;[s, t] = line.split(" ").map(Number)
}).on("close", () => {
    const res = solve()
    console.log(res)
    process.exit()
})
