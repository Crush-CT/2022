function solution(s) {
    var answer = (s.length === 4 || s.length === 6) && s.match(/^[0-9]+$/) != null
    return answer
}
