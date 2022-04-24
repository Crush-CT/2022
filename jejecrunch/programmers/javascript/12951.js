function solution(s) {
    var answer = s
        .split(" ")
        .map((v) =>
            v
                .split("")
                .map((v, i) => {
                    if (i == 0) return v.toUpperCase()
                    else return v.toLowerCase()
                })
                .join("")
        )
        .join(" ")
    return answer
}
