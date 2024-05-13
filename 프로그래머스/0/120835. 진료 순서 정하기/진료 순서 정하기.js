function solution(emergency) {
    var sortArray = emergency.slice().sort((a, b) => b - a);
    var indexArray = [];
    emergency.map(x => indexArray.push(sortArray.indexOf(x)+1));
    
    return indexArray;
}
