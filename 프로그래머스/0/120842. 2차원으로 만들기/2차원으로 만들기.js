function solution(num_list, n) {
    var answer = [];
    //[[]]은 num_list.length / n = [[]]
    while(num_list.length){
        answer.push((num_list.splice(0,n)))
    }
    return answer;
}