function solution(numbers) {
    let answer = new Set()

    function recursive(comb, others) {
        if (comb.length !== 0 && isPrime(parseInt(comb))) answer.add(parseInt(comb))
        const other = [...others.split("")]
        for (let i = 0; i < other.length; i++)
            recursive(comb + other[i], others.substring(0, i) + others.substring(i + 1))
    }

    function isPrime(num) {
        if (num === 0 || num === 1) return false
        let lim = Math.floor(Math.sqrt(num))

        for (let i = 2; i <= lim; i++) if (num % i === 0) return false
        return true
    }

    recursive("", numbers)
    return answer.size
}
