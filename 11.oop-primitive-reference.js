// primitive data type: 기본
let num = 1995;

// pri 복사
let name1 = '홍';
let name2 = name1;
name1 = 3;
console.log(name2); // 홍

// reference data type: 참조
let arr = [1, 2, 3];
let obj = {name: 'lgyn', age: 20};

let obj1 = obj;
obj1.name = 'change';
console.log(obj1);
console.log(obj); // 참조 변수여서 obj1을 바꿔도 영향

let obj2 = {...obj}; // but, 얕은 복사 -> 깊은 복사는 반복문
obj2.name = 'obj2';
console.log(obj);
console.log(obj2);

// reference 비교
let ref1 = {key: 'value'};
let ref2 = {key: 'value'};

console.log(`ref 같음? :  ${ref1 == ref2}`); // false - 참조 비교
console.log(`ref 같음? :  ${ref1 === ref2}`); // false - 참조 비교
console.log(`ref 같음?(JSON.stringfy): ${JSON.stringify(ref1) == JSON.stringify(ref2)}`);
// obj 재할당 이슈 1
let student1 = {name: '김'};
function change1(e) {
  e.name = 'Kim'; // -> 참조 변수를 변경
}
change1(student1);
console.log(student1); // { name: 'Kim' }

// obj 재할당 이슈 2
let student2 = {name: '박'};
function change2(e) {
  e = {name: 'Park'}; // -> {}하는 순간 새로운 객체를 생성하게 된다
  console.log(student2); // {name: '박'}
  console.log(e); // {name: 'Park'}
  // 이 경우 student2에 재할당이 안 된다
}
change2(student2);
console.log(student2); // {name: '박'}

// -> parameter 문법과 reference 문법의 합작 결과
// 파라미터: 변수 생성 + 할당
