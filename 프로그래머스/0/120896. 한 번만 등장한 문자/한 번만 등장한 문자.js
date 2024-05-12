function solution(s) {
    let uniqueChars = [...new Set(s)]; 
    let answer = '';
    
    uniqueChars.sort(); 
    
    for (let char of uniqueChars) {
        if (s.indexOf(char) === s.lastIndexOf(char)) { 
            answer += char; 
        }
    }
    
    return answer;
}

