function solution(numbers, num1, num2) {
    var answer = numbers;
   answer= answer.slice(num1,num2+1);
    return answer;
}