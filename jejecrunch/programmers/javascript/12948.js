function solution(phone_number) {
    var answer = ""
    let count = phone_number.length - 4

    for (let i = 0; i < count; i++) {
        answer += "*"
    }

    answer += phone_number.substring(phone_number.length - 4)

    return answer
}
