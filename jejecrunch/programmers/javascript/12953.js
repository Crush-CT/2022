function solution(arr) {
    let answer = 0
    let temp = 1
    if (arr.length == 1) answer = arr[0]
    else {
        for (let i = 0; i < arr.length; i++) temp = lcm(temp, arr[i])
        answer = temp
    }

    return answer
}

function gcd(a, b) {
    if (b == 0) return a
    return gcd(b, a % b)
}

function lcm(a, b) {
    return (a * b) / gcd(a, b)
}
