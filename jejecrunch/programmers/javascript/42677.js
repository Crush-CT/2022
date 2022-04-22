function solution(jobs) {
    let answer = 0,
        j = 0,
        time = 0
    jobs.sort((a, b) => a[0] - b[0])

    const pq = []
    while (j < jobs.length || pq.length !== 0) {
        if (jobs.length > j && time >= jobs[j][0]) {
            pq.push(jobs[j++])
            pq.sort((a, b) => {
                return a[1] - b[1]
            })
            continue
        }
        if (pq.length !== 0) {
            time += pq[0][1]
            answer += time - pq[0][0]
            pq.shift()
        } else {
            time = jobs[j][0]
        }
    }
    return parseInt(answer / jobs.length)
}
