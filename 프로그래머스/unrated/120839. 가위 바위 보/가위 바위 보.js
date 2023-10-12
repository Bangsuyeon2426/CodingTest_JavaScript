function solution(rsp) {
    const length = rsp.length; 
    let result = ''; 

    for (let i = 0; i < length; i++) {
        const current = rsp[i];

        if (current === '2') {
            result += '0';
        }
        else if (current === '0') {
            result += '5';
        }
      
        else if (current === '5') {
            result += '2';
        }
    }

    return result;
}