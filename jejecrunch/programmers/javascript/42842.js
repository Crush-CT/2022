function solution(brown, yellow) {
    let answer = new Array()
    let total = brown + yellow

    for (let i = 1; i <= total; i++) {
        let row = i
        let col = total / i

        if (row > col) continue
        if ((row - 2) * (col - 2) === yellow) {
            answer.push(col, row)
            break
        }
    }

    return answer
}
