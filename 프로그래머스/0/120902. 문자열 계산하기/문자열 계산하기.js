function solution(my_string) {
    var answer = 0;
    // 문자열을 공백을 기준으로 분할하여 배열로 만듭니다.
    var tokens = my_string.split(' ');
    
    // 첫 번째 숫자를 초기값으로 설정합니다.
    answer = parseInt(tokens[0]);
    
    // tokens 배열을 순회하면서 계산합니다.
    for (let i = 1; i < tokens.length; i += 2) {
        // 연산자를 추출합니다.
        let operator = tokens[i];
        // 다음 숫자를 추출합니다.
        let number = parseInt(tokens[i + 1]);
        
        // 연산자에 따라 계산을 수행합니다.
        if (operator === '+') {
            answer += number;
        } else if (operator === '-') {
            answer -= number;
        }
    }
    
    return answer;
}
