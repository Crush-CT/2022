function solution(a, b) {
    const today = new Date(2016 + "-" + a + "-" + b).toString()
    const answer = today.slice(0, 3).toUpperCase()

    return answer
}
