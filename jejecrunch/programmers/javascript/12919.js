function solution(seoul) {
    var answer = ""

    for (const key in Object.keys(seoul)) {
        if (seoul[key] == "Kim") {
            answer = "김서방은 " + key + "에 있다"
            break
        }
    }
    return answer
}
