function solution(arr) {
    let answer = [...arr]
    let m = min(arr)
    answer = answer.filter((a) => {
        return a != m
    })

    if (Array.isArray(answer) && answer.length == 0) {
        answer = [-1]
    }

    return answer
}

function min(arr) {
    let result = 9382419839430248
    for (let i = 0; i < arr.length; i++) {
        if (result > arr[i]) {
            result = arr[i]
        }
    }
    return result
}
