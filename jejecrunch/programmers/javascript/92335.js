function isPrimeNumber(value) {
    if (value <= 1) return false

    for (let i = 2; i <= Math.sqrt(value); i++) {
        if (value % i === 0) return false
    }

    return true
}

function solution(n, k) {
    let answer = 0

    n.toString(k)
        .split("0")
        .map((v) => {
            if (isPrimeNumber(v)) answer++
        })

    return answer
}
