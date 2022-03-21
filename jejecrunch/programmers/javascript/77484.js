function solution(lottos, win_nums) {
    var answer = new Array()
    let count = new Array(2).fill(0)

    lottos.map((v, i) => {
        if (win_nums.includes(v)) {
            count[0]++
            count[1]++
        } else {
            if (v == 0) count[0]++
        }
    })

    switch (count[0]) {
        case 6:
            answer[0] = 1
            break
        case 5:
            answer[0] = 2
            break
        case 4:
            answer[0] = 3
            break
        case 3:
            answer[0] = 4
            break
        case 2:
            answer[0] = 5
            break
        default:
            answer[0] = 6
            break
    }

    switch (count[1]) {
        case 6:
            answer[1] = 1
            break
        case 5:
            answer[1] = 2
            break
        case 4:
            answer[1] = 3
            break
        case 3:
            answer[1] = 4
            break
        case 2:
            answer[1] = 5
            break
        default:
            answer[1] = 6
            break
    }

    return answer
}
