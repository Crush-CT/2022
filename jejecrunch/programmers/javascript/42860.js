function solution(name) {
    let answer = 0;
    let arr = name.split("");
    let length = name.length;
    let index = 0;
    let move = length - 1;
    
    arr.map((v, i) => {
        answer += Math.min(name.charCodeAt(i) -'A'.charCodeAt(0), 'Z'.charCodeAt(0)-name.charCodeAt(i)+1)
        
        index = i+1;
        while(index < length && name.charCodeAt(index) == 'A'.charCodeAt(0)) index++;
        
        move = Math.min(move, i * 2 + length - index);
        move = Math.min(move, (length - index) * 2 + i);
    })
    return answer+move;
}