const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let N = 0,
    sum = 0,
    left = 0,
    right = 1,
    ans = 0,
    primes = []

function eratosthenesSieve(number) {
    const array = []
    const tempArray = []

    for (let i = 2; i <= number; i++) tempArray[i] = i

    for (let i = 2; i <= number; i++) {
        if (tempArray[i] === 0) continue
        for (let j = i + i; j <= number; j += i) tempArray[j] = 0
    }

    for (let i = 2; i <= number; i++) {
        if (tempArray[i] !== 0) array.push(tempArray[i])
    }

    return array
}

function solve() {
    primes = eratosthenesSieve(N)
    sum = primes[left]

    while (left < primes.length && right < primes.length) {
        if (sum <= N) {
            if (sum === N) ans++
            sum += primes[right++]
        } else {
            sum -= primes[left++]
        }
    }

    if (primes[primes.length - 1] === N) ans++

    console.log(ans)
}

rl.on("line", (line) => {
    N = +line
}).on("close", () => {
    solve()

    process.exit()
})
