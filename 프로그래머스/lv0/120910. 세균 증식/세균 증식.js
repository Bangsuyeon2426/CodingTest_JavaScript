function solution(n, t) {
   var answer = n;
    
    while (t > 0) {
        answer *= 2;
        t--;
    }
    
    return answer;
}