function solution(num_list) {
    var counts ={
        even:0,
        odd:0
    }
    num_list.map(function(num){
        if(num%2==0){
        counts.even++;
    }else{
        counts.odd++;
    }
    })
    return [counts.even,counts.odd];
}