function solution(id_pw, db) {
    for (let i = 0; i < db.length; i++) {
        // 아이디가 일치하는지 확인
        if (db[i][0] === id_pw[0]) {
            // 비밀번호가 일치하는지 확인
            if (db[i][1] === id_pw[1]) {
                return "login";
            } else {
                return "wrong pw";
            }
        }
    }
    // 루프를 모두 돌았는데도 아이디가 일치하지 않으면
    return "fail";
}
