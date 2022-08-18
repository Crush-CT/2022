const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function binarySearch(list, target, left, right, mid) {
    mid = Math.floor((left + right) / 2)

    if (right < left) {
        return list[mid] == target ? 1 : 0
    }

    if (list[mid] > target) {
        right = mid - 1
    } else {
        left = mid + 1
    }

    return binarySearch(list, target, left, right, mid)
}

function solve() {
    const result = data.map((v) => binarySearch(stand, v, 0, stand.length - 1, 0)).join("\n")

    console.log(result)
}

let count = 0,
    stand = [],
    data = []

rl.on("line", (line) => {
    if (count == 1)
        stand = line
            .split(" ")
            .map(Number)
            .sort((a, b) => a - b)
    else if (count == 3) data = line.split(" ").map(Number)
    count++
}).on("close", () => {
    solve()
    process.exit()
})
