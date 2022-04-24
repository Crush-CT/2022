function solution(n) {
    var answer = 0
    const n_count = count(n.toString(2))

    while (true) {
        n++
        if (count(n.toString(2)) == n_count) {
            answer = n
            break
        }
    }

    return answer
}

function count(n) {
    let count = 0
    n.split("").forEach((v) => (count = v == 1 ? count + 1 : count))
    return count
}
