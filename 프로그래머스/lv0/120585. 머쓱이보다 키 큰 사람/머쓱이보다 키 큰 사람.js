function solution(array, height) {
    var answer = 0;
    array.filter((num)=>{
        if(num>height){
            answer++;
        }});
    return answer;
}