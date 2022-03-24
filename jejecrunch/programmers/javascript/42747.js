function solution(citations) {
    var answer = 0
    citations.sort((a, b) => b - a)
    let h = 0

    while (h + 1 <= citations[h]) {
        h++
    }
    answer = h

    // const n = citations.length;
    // for(let i=0;i<n;i++){
    //     const h_idx = n - i;
    //     if(citations[i] >= h_idx){
    //         answer=h_idx;
    //         break;
    //     }
    // }

    return answer
}
