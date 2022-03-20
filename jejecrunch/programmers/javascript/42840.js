function solution(answers) {
    let scores = [a_score(answers), b_score(answers), c_score(answers)]
    let answer = compare(scores)
    return answer
}

function compare(scores) {
    let result = new Array(3)

    if (scores[0] < scores[1]) {
        if (scores[1] < scores[2]) {
            // 3
            result = [3]
            return result
        } else if (scores[2] < scores[1]) {
            // 2
            result = [2]
            return result
        } else if (scores[1] == scores[2]) {
            // 2, 3
            result = [2, 3]
            return result
        }
    } else if (scores[0] == scores[1]) {
        if (scores[1] < scores[2]) {
            // 3
            result = [3]
            return result
        } else if (scores[1] > scores[2]) {
            // 1, 2
            result = [1, 2]
            return result
        } else {
            // 1, 2, 3
            result = [1, 2, 3]
            return result
        }
    } else if (scores[0] > scores[1]) {
        if (scores[0] > scores[2]) {
            // 1
            result = [1]
            return result
        } else if (scores[0] < scores[2]) {
            // 3
            result = [3]
            return result
        } else if (scores[0] == scores[2]) {
            // 1, 3
            result = [1, 3]
            return result
        }
    }

    return result
}

function a_score(answers) {
    let stand = new Array(1, 2, 3, 4, 5)
    let score = 0

    answers.map((v, i) => {
        if (stand[i % stand.length] == v) score++
    })

    return score
}

function b_score(answers) {
    let stand = new Array(2, 1, 2, 3, 2, 4, 2, 5)
    let score = 0

    answers.map((v, i) => {
        if (stand[i % stand.length] == v) score++
    })

    return score
}

function c_score(answers) {
    let stand = new Array(3, 3, 1, 1, 2, 2, 4, 4, 5, 5)
    let score = 0

    answers.map((v, i) => {
        if (stand[i % stand.length] == v) score++
    })

    return score
}
