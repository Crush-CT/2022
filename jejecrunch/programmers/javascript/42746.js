function solution(numbers) {
    var answer = ""
    let temp = [...numbers]
    temp.sort(function (o1, o2) {
        const str1 = o1 + ""
        const str2 = o2 + ""
        return +(str2 + str1) > +(str1 + str2) ? 1 : +(str2 + str1) < +(str1 + str2) ? -1 : 0
    })
    temp.map((v) => (answer += v))
    let check_arr = answer.split("")
    let check = false
    for (let i = 0; i < check_arr.length; i++) {
        if (check_arr[i] != "0") {
            check = false
            break
        }

        check = true
    }
    if (check) answer = "0"
    return answer
}
