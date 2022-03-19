function solution(s) {
    var answer = true
    let countP = 0
    let countY = 0
    let arr = s.split("").map((value) => {
        if (value == "p" || value == "P") countP++
        else if (value == "y" || value == "Y") countY++
    })
    if (countP == 0 && countY == 0) answer = true
    else if (countP == countY) answer = true
    else answer = false
    return answer
}
