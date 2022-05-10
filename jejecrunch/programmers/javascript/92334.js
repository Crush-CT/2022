function solution(id_list, report, k) {
    const answer = new Array(id_list.length).fill(0)
    const report_list = {}

    id_list.map((user) => {
        report_list[user] = []
    })

    report.map((v) => {
        const [user, report] = v.split(" ")
        if (!report_list[report].includes(user)) {
            report_list[report].push(user)
        }
    })

    for (const key in report_list) {
        if (report_list[key].length >= k) {
            report_list[key].map((v) => {
                answer[id_list.indexOf(v)] += 1
            })
        }
    }

    return answer
}
