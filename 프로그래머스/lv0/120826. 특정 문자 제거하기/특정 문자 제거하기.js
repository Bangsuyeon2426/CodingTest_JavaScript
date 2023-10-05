function solution(my_string, letter) {
    var answer = '';
    var a =Array.from(my_string);
    var b =Array.from(letter);
    var filters=a.filter(char=>!b.includes(char));
    answer = filters.join('');
    return answer;
}