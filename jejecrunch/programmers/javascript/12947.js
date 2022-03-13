function solution(x) {
    let answer = false

    if (x % sum(x) == 0) answer = true

    return answer
}

function sum(x) {
    let result = 0

    while (x > 0) {
        result += Math.floor(x % 10)
        x /= 10
    }

    console.log(result)

    return result
}
