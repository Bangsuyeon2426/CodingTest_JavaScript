function solution(i, j, k) {
    var str = '';
    for(i;i<=j;i++){
        str+=i;
    }
    return str.split(k).length-1;
}