function solution(my_string) {
    var visited = {}; // 각 문자의 첫 등장 위치를 기록하는 객체
    var result = ''; // 결과 문자열
    
    for (var i = 0; i < my_string.length; i++) {
        var currentChar = my_string[i];
        if (!visited[currentChar]) { // 현재 문자가 이전에 등장한 적이 없는 경우에만 결과에 추가
            result += currentChar;
            visited[currentChar] = true; // 현재 문자를 방문한 것으로 표시
        }
    }
    
    return result;
}