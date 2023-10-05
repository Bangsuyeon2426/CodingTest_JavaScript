function solution(sides) {
    var answer = 0;
    var arr =sides.sort((a,b)=>{
               return b-a;
               })
    if(arr[0]>=arr[1]+arr[2]){
        answer=2;
    }else{
        answer=1;
    }
    return answer;
}