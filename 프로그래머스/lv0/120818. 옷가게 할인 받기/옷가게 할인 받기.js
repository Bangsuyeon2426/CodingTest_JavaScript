function solution(price) {
    var answer = 0;
    
    if (price >= 500000) {
        answer = Math.floor(price * 0.80); // 50만 원 이상 구매 시 20% 할인
    } else if (price >= 300000) {
        answer = Math.floor(price * 0.90); // 30만 원 이상 구매 시 10% 할인
    } else if (price >= 100000) {
        answer = Math.floor(price * 0.95); // 10만 원 이상 구매 시 5% 할인
    } else {
        answer = price; // 할인이 적용되지 않은 가격
    }
    
    return answer;
}