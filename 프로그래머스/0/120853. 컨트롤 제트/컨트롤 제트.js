function solution(s) {
  let answer = 0;
  s = s.split(' ')
  let num = []
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === 'Z') {
      num.pop()
    } else num.push(Number(s[i]))
  }
  num.forEach(n => answer += n)
  return answer;
}