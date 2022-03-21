function solution(nums) {
    var answer = 0
    let total = new Array()
    let arr = new Array(1001).fill(false)

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                total.push(nums[i] + nums[j] + nums[k])
            }
        }
    }

    total.map((v) => {
        for (let a = 2; a <= v; a++) {
            if (arr[a]) continue
            for (let b = 2 * a; b <= v; b += a) {
                arr[b] = true
            }
        }
        if (!arr[v]) answer++
    })

    return answer
}
