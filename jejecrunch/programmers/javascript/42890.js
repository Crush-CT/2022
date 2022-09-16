function solution(relation) {
    const answer = new Set()
    let cols = relation[0].length
    const check = 1 << cols

    for (let i = 1; i < check; i++) {
        let temp = relation.map((x) => x.filter((_, col) => i & (1 << col)).join(""))
        const set = new Set(temp)

        if (temp.length === set.size) answer.add(i)
    }

    for (let x of answer) {
        for (let y of answer) {
            if (x >= y) continue
            if ((x & y) === x) answer.delete(y)
        }
    }

    return answer.size
}
