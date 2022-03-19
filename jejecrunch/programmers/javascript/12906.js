function solution(arr) {
    var answer = arr.filter((val, index) => val != arr[index + 1])
    return [...answer]
}
