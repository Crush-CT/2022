function solution(s) {
    const trimed = s
        .slice(2, -2)
        .split("},{")
        .map((str) => str.split(","))
        .sort((a, b) => a.length - b.length)

    const res = []
    let prevSum = 0

    for (let i = 0; i < trimed.length; i++) {
        let sum = [...trimed[i]].reduce((a, b) => parseInt(a) + parseInt(b))

        if (i === 0) {
            res.push(+sum)
            prevSum = sum
        } else {
            res.push(sum - prevSum)
            prevSum = sum
        }
    }

    return res
}
