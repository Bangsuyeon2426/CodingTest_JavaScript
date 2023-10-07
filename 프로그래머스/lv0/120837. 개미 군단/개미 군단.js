function solution(hp) {
    var answer = 0;
    
    let generals = Math.floor(hp / 5); 
    hp -= generals * 5; 

    let soldiers = Math.floor(hp / 3) 
    hp -= soldiers * 3; // 

    return generals + soldiers + hp;
}