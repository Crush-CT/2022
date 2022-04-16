function solution(people, limit) {
    let answer = 0
    people.sort((a, b) => b - a)
    let l = 0,
        r = people.length - 1

    while (l < r) {
        let sum = people[l] + people[r]
        if (sum > limit) l++
        else {
            l++
            r--
        }
        answer++
    }

    if (l == r) answer++

    return answer
}
