function solution(num, k) {
    num = num.toString();
    var hasK = false;
    for (var i = 0; i < num.length; i++) {
        if (num[i] === k.toString()) {
            hasK = true;
            return i + 1; 
        }
    }
    
    if (!hasK) {
        return -1;
    }
}