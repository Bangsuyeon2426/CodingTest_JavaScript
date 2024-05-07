function solution(n) {
    var compositeCount = 0; 
    
    for (var i = 4; i <= n; i++) { 
        var divisorCount = 0; 
        
        for (var j = 1; j <= i; j++) {
            if (i % j === 0) { 
                divisorCount++;
            }
        }
        
        if (divisorCount >= 3) { 
            compositeCount++;
        }
    }
    
    return compositeCount;
}