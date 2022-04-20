let answer = 0
function solution(numbers, target) {
    dfs(numbers, 0, target, 0)
    return answer
}

function dfs(arr, idx, target, sum) {
    if (idx == arr.length) {
        if (sum == target) answer++
        return
    }

    sum += arr[idx]
    dfs(arr, idx + 1, target, sum)
    sum -= arr[idx]
    sum += -1 * arr[idx]
    dfs(arr, idx + 1, target, sum)
}
