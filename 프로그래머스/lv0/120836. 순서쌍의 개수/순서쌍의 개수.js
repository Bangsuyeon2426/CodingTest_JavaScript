function solution(n) {
    var answer = [,];
    for (let a=1;a*a<= n ; a++){
    if (n%a==0){
        answer++;
        if(n/a!=a){
            answer++;
        }
     }
}
    return answer;
}