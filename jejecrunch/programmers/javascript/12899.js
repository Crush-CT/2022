function solution(n) {
    let answer = ""
    const numbers = ["4", "1", "2"]
    let num = n

    while (num > 0) {
        const reminder = parseInt(num % 3)
        num = parseInt(num / 3)
        if (reminder === 0) num--
        answer = numbers[reminder].concat(answer)
    }

    return answer
}
