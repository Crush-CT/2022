function solution(progresses, speeds) {
    let queue = new Array();
    let answer = new Array();
    let count = 1;
    
    for(let i=0;i<progresses.length;i++){
        queue.push(Math.ceil((100.0 - progresses[i])/speeds[i]))
    }
    
    let dayCount = queue.shift();
    for(let i=1;i<progresses.length;i++){
        let temp = queue.shift();
        if(dayCount < temp){
            answer.push(count);
            count = 1;
            dayCount = temp;
        } else
            count++;
    }
    
    answer.push(count);
    
    return answer;
}