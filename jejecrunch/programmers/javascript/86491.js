function solution(sizes) {
    var answer = 0
    let W = -100,
        H = -100
    sizes.map((value) => {
        let [w, h] = value.sort((a, b) => b - a)
        W = Math.max(w, W)
        H = Math.max(h, H)
    })

    answer = W * H

    return answer
}
