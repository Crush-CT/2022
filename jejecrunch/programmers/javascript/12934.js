function solution(n) {
    let answer = 0
    let x = Math.sqrt(n)

    if (x && Number.isInteger(x)) {
        answer = Math.pow(x + 1, 2)
    } else {
        answer = -1
    }

    return answer
}
