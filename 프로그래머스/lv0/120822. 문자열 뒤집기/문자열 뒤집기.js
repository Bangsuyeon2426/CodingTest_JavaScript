function solution(my_string) {
    var answer = [];
    var myString =Array.from(my_string);
    
    while (myString.length > 0){
       var a= myString.pop()
       answer.push(a);
    }
    return answer.join("");
}