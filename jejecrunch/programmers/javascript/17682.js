function solution(dartResult) {
    const stack = []
    const sum = []
    const arr = dartResult.split("")

    arr.forEach((v, i) => {
        if (!isNaN(v)) {
            if (v === "0" && arr[i - 1] === "1") {
                stack.pop()
                stack.push(10)
            } else {
                if (stack.length > 0) sum.push(stack.pop())
                stack.push(+v)
            }
        }
        if (v === "D") stack[0] = stack[0] ** 2
        if (v === "T") stack[0] = stack[0] ** 3
        if (v === "*") {
            stack[0] = stack[0] * 2
            if (sum.length > 0) {
                const tmp = sum.pop() * 2
                sum.push(tmp)
            }
        }
        if (v === "#") stack[0] = stack[0] * -1
    })
    return sum.reduce((acc, cur) => acc + cur, stack[0])
}
