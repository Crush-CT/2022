function solution(operations) {
    let answer = new Array()
    for (let i = 0; i < operations.length; i++) {
        const num = +operations[i].substring(2)
        switch (operations[i].substring(0, 1)) {
            case "I":
                answer.push(num)
                answer.sort((a, b) => a - b)
                break
            case "D":
                if (num === 1) answer.pop()
                else answer.shift()
                break
        }
    }

    if (answer.length === 0) return [0, 0]
    return [answer[answer.length - 1], answer[0]]
}
