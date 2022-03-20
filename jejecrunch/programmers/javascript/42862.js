function solution(n, lost, reserve) {
    var answer = 0
    let arr = new Array(n).fill(1)

    ;[...lost].sort().map((v, i) => {
        arr[lost[i] - 1] = 0
    })

    ;[...reserve].sort().map((v, i) => {
        if (arr[reserve[i] - 1] == 0) {
            arr[reserve[i] - 1] = 1
        } else {
            arr[reserve[i] - 1] = 2
        }
    })

    answer = borrow(arr)

    return answer
}

function borrow(arr) {
    let temp = [...arr]
    let count = 0

    temp.map((v, i) => {
        if (i == temp.length - 1) {
            if (temp[i] == 0 && temp[i - 1] == 2) {
                temp[i] = 1
                temp[i - 1] = 1
            }
        } else {
            if (temp[i] == 0 && temp[i + 1] == 2) {
                if (temp[i - 1] == 2) {
                    temp[i] = 1
                    temp[i - 1] = 1
                } else {
                    temp[i] = 1
                    temp[i + 1] = 1
                }
            } else if (temp[i] == 0 && temp[i - 1] == 2) {
                temp[i] = 1
                temp[i - 1] = 1
            }
        }
    })

    temp.map((v, i) => {
        if (temp[i] >= 1) {
            ++count
        }
    })

    return count
}
