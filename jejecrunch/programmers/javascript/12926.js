function solution(s, n) {
    var answer = ""
    const big = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const small = "abcdefghijklmnopqrstuvwxyz"

    for (let i = 0; i < s.length; i++) {
        if (big.indexOf(s.charAt(i)) > -1) {
            const index = (big.indexOf(s.charAt(i)) + n) % big.length

            answer += big.charAt(index)
        } else if (small.indexOf(s.charAt(i)) > -1) {
            const index = (small.indexOf(s.charAt(i)) + n) % small.length

            answer += small.charAt(index)
        } else {
            answer += s.charAt(i)
        }
    }
    return answer
}
