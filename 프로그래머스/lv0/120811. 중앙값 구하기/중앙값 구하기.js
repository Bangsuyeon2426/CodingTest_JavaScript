function solution(array) {
    var answer = 0;
    array =array.sort((a,b)=> a-b);
    //인덱스/2+1번째출력
    var i = Math.floor(array.length / 2);
    answer = array[i]
    return answer;
}