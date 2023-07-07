// 위는 파라미터
function func(a, b, c) {
  console.log(a, b, c); // arguments
  console.log(arguments);
  console.log(arguments[2]); // 객체 속성값 불러오는 표현일 뿐
  // arguments는 객체
  // arguments.map((e) => console.log(e)); -> 쓸 수 없음
  for (let i = 0; i < arguments.length; i++) {
    console.log('for:' + arguments[i]);
  }
}
func(1, 2, 3);

obj = {name: '홍길동', age: 20, department: 1};
console.log(obj.length); // undefined

// arguments는 배열이 아닌 객체이지만,
// 특별히 인덱스로 조회가능하고,
// length라는 속성이 존재해서 배열 메소드가 먹히는 것처럼 보인다
