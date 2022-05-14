function solution(cacheSize, cities) {
    var answer = 0
    const CACHE_HIT = 1,
        CACHE_MISS = 5
    let memory = []

    if (cacheSize == 0) return cities.length * CACHE_MISS

    for (let i = 0; i < cities.length; i++) {
        let temp = cities[i].toUpperCase()
        if (memory.findIndex((v) => v == temp) > -1) {
            memory = memory.filter((v) => v != temp)
            answer += CACHE_HIT
            memory.push(temp)
        } else {
            answer += CACHE_MISS
            if (memory.length >= cacheSize) {
                memory.shift()
            }
            memory.push(temp)
        }
    }
    return answer
}
