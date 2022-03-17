function solution(s) {
    var answer = ""
    let words = s.split(" ")

    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            let temp = words[i].charAt(j)
            if (j % 2 == 0) {
                answer += temp.toUpperCase()
            } else {
                answer += temp.toLowerCase()
            }
        }
        if (i != words.length - 1) answer += " "
    }
    return answer
}
