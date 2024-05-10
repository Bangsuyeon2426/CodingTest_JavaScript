function solution(my_string) {
    var numbers = my_string.match(/\d+/g);
    if (!numbers) return 0; // 숫자가 없는 경우 0을 반환

    var answer = numbers.reduce((prev, curr) => prev + parseInt(curr), 0);
    return answer;
}
