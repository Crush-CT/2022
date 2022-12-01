const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let [N, K] = [],
    words = []

const defaultStr = ["a", "n", "t", "i", "c"]

const combinations = function* (elements, selectNumber) {
    for (let i = 0; i < elements.length; i++) {
        if (selectNumber === 1) {
            yield [elements[i]]
        } else {
            const fixed = elements[i]
            const rest = elements.slice(i + 1)

            for (const a of combinations(rest, selectNumber - 1)) {
                yield [fixed, ...a]
            }
        }
    }
}

function solve() {
    if (K < 0) {
        console.log(0)
        return
    } else if (K === 0) {
        const isAble = [...defaultStr]
        let count = 0
        word: for (let i = 0; i < words.length; i++) {
            for (let j = 0; j < words[i].length; j++) {
                if (!isAble.includes(words[i][j])) {
                    continue word
                }
            }
            count++
        }

        console.log(count)
        return
    } else if (K === 26) {
        console.log(N)
        return
    } else {
        const restAlpha = [
            "b",
            "d",
            "e",
            "f",
            "g",
            "h",
            "j",
            "k",
            "l",
            "m",
            "o",
            "p",
            "q",
            "r",
            "s",
            "u",
            "v",
            "w",
            "x",
            "y",
            "z",
        ]

        let maxValue = 0
        for (const a of combinations(restAlpha, K)) {
            const isAble = [...defaultStr, ...a]
            let count = 0
            word: for (let i = 0; i < words.length; i++) {
                for (let j = 0; j < words[i].length; j++) {
                    if (!isAble.includes(words[i][j])) {
                        continue word
                    }
                }
                count++
            }

            if (maxValue < count) {
                maxValue = count
            }
        }
        console.log(maxValue)
    }
}

rl.on("line", (line) => {
    if (!N && !K) {
        ;[N, K] = line.split(" ").map(Number)
        K -= 5
    } else {
        words.push(line)
    }
}).on("close", () => {
    words = words.map((el) => el.split("").splice(4, el.length - 8))
    solve()
})
