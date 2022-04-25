function solution(n, s) {
    let answer = []

    if (n > s) answer = [-1]
    else {
        answer = new Array()
        for (let i = 0; i < n; i++) {
            answer.push(parseInt(s / n))
        }
        for (let i = 0; i < s % n; i++) {
            answer[i]++
        }
        answer.sort((a, b) => a - b)
    }
    return answer
}
