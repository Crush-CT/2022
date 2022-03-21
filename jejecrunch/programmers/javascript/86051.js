function solution(numbers) {
    let stand = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

    return stand.reduce((acc, cur, idx) => {
        if (!numbers.includes(cur)) acc += cur
        return acc
    }, 0)
}
