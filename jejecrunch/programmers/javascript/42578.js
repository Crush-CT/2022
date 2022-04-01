function solution(clothes) {
    var answer = 1
    let _map = new Map()

    clothes.map((v, i) => {
        _map.set(v[1], (_map.get(v[1]) || 0) + 1)
    })

    _map.forEach((v, i) => {
        answer *= v + 1
    })

    return answer - 1
}
