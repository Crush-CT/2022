const readline = require("readline")

// 인터페이스 객체를 만들자.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
let result = []
function solve() {
    let arrays = []
    for (let i = 0; i < N; i++) {
        let array = new Array()
        for (let j = 1; j <= data[i]; j++) {
            if (data[i] % j == 0) {
                array.push(j)
            }
        }
        arrays.push(array)
    }
    result = arrays[0]
    for (let i = 0; i < arrays.length - 1; i++) {
        let temp = arrays[i].filter((it) => arrays[i + 1].includes(it))
        result = result.filter((el) => temp.includes(el))
    }

    console.log(result.join("\n"))
}

let data = []
let N = 0
let count = 0

rl.on("line", (line) => {
    if (count == 0) {
        N = Number(line)
        count++
    } else {
        data = line.split(" ").map(Number)
        rl.close()
    }
})

rl.on("close", () => {
    solve()
    process.exit()
})
