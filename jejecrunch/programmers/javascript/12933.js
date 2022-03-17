function solution(n) {
    var answer = 0

    let arr = []
    let temp = n

    while (true) {
        if (temp == 0) break

        arr = [...arr, temp % 10]
        temp /= 10
        temp = Math.floor(temp, 0)
    }

    arr.sort()

    for (let i = 0; i < arr.length; i++) {
        answer += arr[i] * Math.pow(10, i)
    }

    return answer
}
