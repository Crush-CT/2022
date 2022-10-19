const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve() {
    const rotation = command.map((v) => {
        const clockwise = v[1] == "1" ? true : false
        return { index: v[0] - 1, clockwise: clockwise }
    })

    const goClock = (i) => {
        data[i].unshift(data[i].pop())
    }

    const goCountClock = (i) => {
        data[i].push(data[i].shift())
    }

    for (let i = 0; i < K; i++) {
        const { index, clockwise } = rotation.shift()
        let nowLeft = data[index][6]
        let nowRight = data[index][2]
        let left = index - 1
        let right = index + 1
        let leftClock = !clockwise
        let rightClock = !clockwise
        if (clockwise) {
            goClock(index)
        } else {
            goCountClock(index)
        }

        while (left > -1) {
            const prevRight = data[left][2]
            if (prevRight == nowLeft) break
            nowLeft = data[left][6]
            if (leftClock) {
                goClock(left)
            } else {
                goCountClock(left)
            }
            leftClock = !leftClock
            left--
        }

        while (right < T) {
            const nextLeft = data[right][6]
            if (nextLeft == nowRight) break
            nowRight = data[right][2]
            if (rightClock) {
                goClock(right)
            } else {
                goCountClock(right)
            }
            rightClock = !rightClock
            right++
        }
    }

    let answer = 0
    data.forEach((v) => {
        if (v[0] == "1") answer++
    })
    console.log(answer)
}

let T = 0,
    K = 0
const data = [],
    command = []

rl.on("line", (line) => {
    if (!T) T = +line
    else {
        if (data.length === T) {
            if (!K) K = +line
            else command.push(line.split(" ").map(Number))
        } else data.push(line.split("").map(Number))
    }
}).on("close", () => {
    solve()
    process.exit()
})
