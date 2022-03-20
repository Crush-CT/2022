function solution(array, commands) {
    var answer = new Array()
    ;[...commands].map((v, i) => {
        answer[i] = [...array].slice(v[0] - 1, v[1]).sort((a, b) => a - b)[v[2] - 1]
    })
    return answer
}
