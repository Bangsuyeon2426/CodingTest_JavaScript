function solution(order) {
    var answer = 0;
     var q = order.toString().split('').filter((a) => a === '3' || a === '6' || a === '9');
    return q.length;
}