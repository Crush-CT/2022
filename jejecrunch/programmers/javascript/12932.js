function solution(n) {
    var answer = []
    let temp = n

    while (true) {
        if (temp == 0) break

        answer = [...answer, temp % 10]
        temp /= 10
        temp = Math.floor(temp, 0)
    }

    return answer
}
