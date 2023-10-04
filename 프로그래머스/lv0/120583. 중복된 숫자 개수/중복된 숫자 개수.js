function solution(array, n) {
    var answer = 0;
    
    const found = array.find((num) => num === n);
    
    if (found !== undefined) {
        answer = array.filter((num) => num === n).length;
    }
    
    return answer;
}
