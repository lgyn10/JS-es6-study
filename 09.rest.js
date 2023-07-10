// 09. rest-parameter
// ...rest -> rest 파라미터
// 파라미터들을 배열 변수로 변환

function rest(n1, n2, ...rest) {
  console.log('n1: ' + n1);
  console.log('n2: ' + n2);
  console.log('rest: ' + rest);
  console.log(rest); // 배열화
  for (let k of rest) {
    console.log(k);
  }
}

rest(1, 2, 3, 4, 5, 6, 7);

// arguments: 모든 인자들을 다룸
// rest-param: 나머지 인자들만 다룰 수 있음
