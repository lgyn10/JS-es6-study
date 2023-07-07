function add(a, b) {
  console.log(a + b);
}

add(1, 3); // 4
add(1); // NaN
// 인자가 한개만 명시되어도 에러가 나지 않음 - 다른 엄격한 언어는 에러남

function add2(a, b = 10) {
  console.log(a + b);
}
add2(1); // 1+10 = 11
add2(5, 3); // 5+3 = 8

const func = () => {
  return 5;
};

function add3(a, b = func()) {
  console.log('기본 인자에 함수 할당');
  console.log(a + b);
}
add3(1);
