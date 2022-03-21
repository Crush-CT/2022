function solution(a, b) {
    var answer = 0

    a.map((v, i) => {
        answer += v * b[i]
    })

    return answer
}
