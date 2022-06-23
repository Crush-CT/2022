const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function convert(rawTime) {
    let curTime = rawTime

    // 분이 60분 보다 크다면
    if (curTime % 100 > 59) {
        curTime += 100
        curTime -= 60
    }

    // 분이 60분 보다 작다면
    if (curTime % 100 < -59) {
        curTime -= 100
        curTime += 60
    }

    // 시간이 음수인 경우
    if (rawTime < 0) {
        curTime = 2400 + rawTime
    }

    // 시간이 24시간보다 크거나 같은 경우
    if (curTime > 2399) {
        curTime %= 2400
    }

    return curTime
}

function solve(str) {
    console.log(str + " in Ottawa")
    console.log(convert(+str - 300) + " in Victoria")
    console.log(convert(+str - 200) + " in Edmonton")
    console.log(convert(+str - 100) + " in Winnipeg")
    console.log(str + " in Toronto")
    console.log(convert(+str + 100) + " in Halifax")
    console.log(convert(+str + 130) + " in St. John's")
}

rl.on("line", (line) => {
    solve(line)
}).on("close", () => {
    process.exit()
})
