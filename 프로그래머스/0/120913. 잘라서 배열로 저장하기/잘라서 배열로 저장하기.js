function solution(my_str, n) {
    
    let array = []

    for(i=0;i<my_str.length;i+=n) {
        array.push(my_str.slice(i,i+n))
    }
    return array;

}