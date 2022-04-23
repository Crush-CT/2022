function solution(n) {
    const answer = fibonacci(n) % 1234567
    return answer
}

function fibonacci(i) {
    let arr = new Array(i + 1).fill(0).fill(1, 1)

    for (let n = 2; n < i + 1; n++) {
        arr[n] = (arr[n - 2] % 1234567) + (arr[n - 1] % 1234567)
    }

    return arr[i]
}
