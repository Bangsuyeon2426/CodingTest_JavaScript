function solution(array) {
    var answer = [];
    var largestNum = array[0];
    var index =0;
    for(let i=1; i<array.length;i++){
        if(array[i]>largestNum){
            largestNum= array[i];
            index= i;
        }
    }
    return [largestNum,index];
}