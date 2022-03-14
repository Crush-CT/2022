function solution(num) {
    var answer = 0
    let temp = num
    while (answer <= 500) {
        if (temp === 1) {
            break
        }

        if (temp % 2 === 0) {
            temp /= 2
        } else {
            temp *= 3
            temp += 1
        }

        answer++
    }

    if (answer > 500) {
        answer = -1
    }

    return answer
}
