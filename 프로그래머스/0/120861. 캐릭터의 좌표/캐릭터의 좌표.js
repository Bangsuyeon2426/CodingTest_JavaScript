function solution(keyinput, board) {
    let x = 0;
    let y = 0;
    
    // board의 최대, 최소 범위 설정
    const xMax = Math.floor(board[0] / 2);
    const yMax = Math.floor(board[1] / 2);
    
   for(let i = 0; i < keyinput.length; i++) {
    if (keyinput[i] === "right" && x + 1 <= xMax) x++;
    if (keyinput[i] === "left" && x - 1 >= -xMax) x--;
    if (keyinput[i] === "up" && y + 1 <= yMax) y++;
    if (keyinput[i] === "down" && y - 1 >= -yMax) y--;
}
    return [x, y]
}