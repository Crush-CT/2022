function solution(s) {
    let count = 0

    const arr = s.split("")

    for (let i = 0; i < arr.length; i++) {
        if (count === 0) {
            if (arr[i] == "(") count++
            else return false
        } else {
            if (arr[i] == ")") count--
            else count++
        }

        if (count > s.length - i) return false
    }

    return count == 0
}
