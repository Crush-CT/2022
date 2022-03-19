function solution(arr, divisor) {
    var answer = arr.sort((x, y) => x - y).filter((value) => value % divisor == 0)
    if (answer.length == 0) {
        answer = [...answer, -1]
    }
    return answer
}
