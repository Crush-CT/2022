let i = 0

function solution(n) {
    let size = 2 ** n - 1
    let answer = new Array(size).fill([0, 0])

    f(1, 3, n, answer)

    return answer
}

function f(from, to, n, answer) {
    if (n > 0) {
        f(from, 6 - (from + to), n - 1, answer)
        answer[i] = [from, to]
        i++
        f(6 - (from + to), to, n - 1, answer)
    }
}
