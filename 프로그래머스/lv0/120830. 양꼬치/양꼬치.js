function solution(n, k) {
    var answer = 0;
    // n은 12000이고, k는 2000.
    // 만약 n이 10배수이면, k값을 하나 빼준다.
    // 그 값을 anwer에 더해준다.
    for(let i=1;i<=n;i++){
    if(i%10==0){
        k--;
        }
            answer = (n*12000)+(k*2000)
    }

    return answer;
}