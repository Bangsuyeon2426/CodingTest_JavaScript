function solution(n) {
    var answer = 0;
    const sqrt = Math.sqrt(n); 
    if (Number.isInteger(sqrt)) {
        answer= 1; 
    } else {
        answer= 2; 
    }
    return answer;
}