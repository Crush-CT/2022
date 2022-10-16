const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let N, M, R
const data = []

function print(arr) {
    console.log(
        arr
            .map((v) => v.join(" "))
            .join("\n")
            .trim()
    )
}

function one(arr) {
    arr = arr.reverse()
    return arr
}

function two(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].reverse()
    }
    return arr
}
function three(arr) {
    N = arr.length
    M = arr[0].length
    let temp = new Array(M).fill(null).map((_) => new Array(N).fill(0))
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            temp[j][N - (i + 1)] = arr[i][j]
        }
    }
    return temp
}
function four(arr) {
    N = arr.length
    M = arr[0].length
    let temp = new Array(M).fill(null).map((_) => new Array(N).fill(0))
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            temp[M - (j + 1)][i] = arr[i][j]
        }
    }
    return temp
}
function five(arr) {
    // 시계 돌리기.
    N = arr.length
    M = arr[0].length
    let temp = new Array(N).fill(null).map((_) => new Array(M).fill(0))
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            temp[i][j] = arr[i][j]
        }
    }

    // 1 -> 2.
    for (let i = 0; i < parseInt(N / 2); i++) {
        for (let j = 0; j < parseInt(M / 2); j++) {
            temp[i][j + Math.ceil(M / 2)] = arr[i][j]
        }
    }
    // 2 -> 3.
    for (let i = 0; i < parseInt(N / 2); i++) {
        for (let j = Math.ceil(M / 2); j < M; j++) {
            temp[i + Math.ceil(N / 2)][j] = arr[i][j]
        }
    }
    // 3 -> 4.
    for (let i = Math.ceil(N / 2); i < N; i++) {
        for (let j = Math.ceil(M / 2); j < M; j++) {
            temp[i][j - Math.ceil(M / 2)] = arr[i][j]
        }
    }
    // 4 -> 1.
    for (let i = Math.ceil(N / 2); i < N; i++) {
        for (let j = 0; j < Math.ceil(M / 2); j++) {
            temp[i - Math.ceil(N / 2)][j] = arr[i][j]
        }
    }
    return temp
}
function six(arr) {
    //반 시계 돌리기.
    N = arr.length
    M = arr[0].length
    let temp = new Array(N).fill(null).map((_) => new Array(M).fill(0))
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            temp[i][j] = arr[i][j]
        }
    }

    // 1-> 4.
    for (let i = 0; i < Math.ceil(N / 2); i++) {
        for (let j = 0; j < Math.ceil(M / 2); j++) {
            temp[i + Math.ceil(N / 2)][j] = arr[i][j]
        }
    }
    // 4->3.
    for (let i = Math.ceil(N / 2); i < N; i++) {
        for (let j = 0; j < Math.ceil(M / 2); j++) {
            temp[i][j + Math.ceil(M / 2)] = arr[i][j]
        }
    }
    // 3->2;
    for (let i = Math.ceil(N / 2); i < N; i++) {
        for (let j = Math.ceil(M / 2); j < M; j++) {
            temp[i - Math.ceil(N / 2)][j] = arr[i][j]
        }
    }
    // 2->1
    for (let i = 0; i < Math.ceil(N / 2); i++) {
        for (let j = Math.ceil(M / 2); j < M; j++) {
            temp[i][j - Math.ceil(M / 2)] = arr[i][j]
        }
    }

    return temp
}

function solve(command, input) {
    let ret = input

    switch (command) {
        case 1:
            ret = one(ret)
            break
        case 2:
            ret = two(ret)
            break
        case 3:
            ret = three(ret)
            break
        case 4:
            ret = four(ret)
            break
        case 5:
            ret = five(ret)
            break
        case 6:
            ret = six(ret)
            break
    }
    return ret
}

rl.on("line", (line) => {
    if (!N && !M && !R) [N, M, R] = line.split(" ").map(Number)
    else {
        data.push(line.split(" ").map(Number))
    }
}).on("close", () => {
    const CAL = data.pop()
    let res = [...data]

    for (let i = 0; i < CAL.length; i++) {
        res = solve(CAL[i], res)
    }

    print(res)
    process.exit()
})
