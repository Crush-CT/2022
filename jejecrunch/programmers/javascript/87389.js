function solution(n) {
    var answer = 0
    let x = n
    let min = 0

    while (true) {
        if (n % x == 1 && x == Math.min(x, min)) {
            min = x
            break
        }
        --x
    }

    answer = Math.abs(min)

    return answer
}
