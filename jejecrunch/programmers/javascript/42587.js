function solution(priorities, location) {
    let answer = 0

    let queue = new Array()

    for (let i = 0; i < priorities.length; i++) {
        queue.push({ key: i, value: priorities[i] })
    }

    let now = 0

    while (queue.length !== 0) {
        let cur = queue.shift()
        let flag = false
        queue.forEach((v, i) => {
            if (v.value > cur.value) {
                flag = true
            }
        })

        if (flag) {
            queue.push(cur)
        } else {
            now++
            if (cur.key == location) {
                answer = now
                break
            }
        }
    }
    return answer
}
