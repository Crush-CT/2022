function solution(n) {
    var answer = 0

    let arr = new Array()

    for (let i = 2; i <= n; i++) {
        if (arr[i]) continue
        for (let j = 2 * i; j <= n; j += i) {
            arr[j] = true
        }
    }

    for (let i = 2; i <= n; i++) {
        if (!arr[i]) answer++
    }

    return answer
}
