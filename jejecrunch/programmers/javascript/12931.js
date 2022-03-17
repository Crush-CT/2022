function solution(n) {
    var answer = 0
    let temp = n

    while (true) {
        if (temp == 0) break
        answer += temp % 10
        temp /= 10
        temp = Math.floor(temp, 0)
    }

    return answer
}
