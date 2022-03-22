class Stack {
    constructor() {
        this._arr = []
    }
    push(item) {
        this._arr.push(item)
    }
    pop() {
        return this._arr.pop()
    }
    peek() {
        return this._arr[this._arr.length - 1]
    }
    empty() {
        return this._arr.length == 0
    }
}

function solution(board, moves) {
    var answer = 0
    const stack = new Stack()

    for (let i = 0; i < moves.length; i++) {
        let result = 0
        for (let a = 0; a < board.length; a++) {
            result = board[a][moves[i] - 1]
            if (board[a][moves[i] - 1] != 0) {
                board[a][moves[i] - 1] = 0
                break
            }
        }

        if (result != 0) {
            if (!stack.empty() && stack.peek() == result) {
                stack.pop()
                answer++
            } else {
                stack.push(result)
            }
        }
    }

    return answer * 2
}
