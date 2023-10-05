function solution(my_string) {
    var answer = 0;
    var arr=Array.from(my_string);
    var answer = arr.reduce((total, num) => {
        if (!isNaN(parseInt(num, 10))) {
            return total + parseInt(num, 10);
        }
        return total;
    }, 0);
    return answer;
}