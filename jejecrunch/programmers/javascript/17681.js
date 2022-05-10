function solution(n, arr1, arr2) {
    const answer = []
    const trans1 = trans(arr1, n)
    const trans2 = trans(arr2, n)

    for (let i = 0; i < trans1.length; i++) {
        answer[i] = ""
        for (let j = 0; j < trans1[i].length; j++) {
            if (trans1[i][j] == 1 || trans2[i][j] == 1) {
                answer[i] += "#"
            } else {
                answer[i] += " "
            }
        }
    }

    return answer
}

function trans(arr, n) {
    const result = new Array(n)

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < arr.length; j++) {
            result[i] = toNumberArr(arr[i].toString(2), n)
        }
    }

    return result
}

function toNumberArr(str, n) {
    while (str.length < n) {
        str = "0" + str
    }
    return str.split("").map(Number)
}
