function solution(numbers) {
    var answer = new Set()

    ;[...numbers].map((a, i) => {
        numbers.slice(i + 1).map((b, j) => {
            answer.add(a + b)
        })
    })

    answer = [...answer].sort((a, b) => a - b)

    return answer
}
