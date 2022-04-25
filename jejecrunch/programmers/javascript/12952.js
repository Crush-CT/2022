let map = new Array()
let count = 0

function solution(n) {
    dfs(0, n)
    return count
}

function dfs(depth, n) {
    if (depth == n) {
        count++
        return
    }

    for (let i = 0; i < n; i++) {
        map[depth] = i
        if (check(depth)) {
            dfs(depth + 1, n)
        }
    }
}

function check(col) {
    for (let i = 0; i < col; i++) {
        if (map[col] == map[i]) {
            return false
        } else if (Math.abs(col - i) == Math.abs(map[col] - map[i])) {
            return false
        }
    }
    return true
}
