// spread usage 1
let a = [1, 2, 3];
let b = [4, 5, 6];
let arr = [...a, ...b];
console.log(arr);

// spread usage 2
let oa = {name: '홍길동', age: 20, grade: 3};
let ob = {job: ' student'};
let obj = {...oa, ...ob};
console.log(obj);

// spread usage 3
// rest 연산자

// apply,call 함수 개념 -> spread 이후 쓸 일이 많지는 않음
var person = {
  hello: function (a, b) {
    console.log(a, b);
    console.log(this.name + 'hello');
  },
};
var person2 = {
  name: 'Kim',
};
person.hello(); // undefinedhello
person.hello.apply(person2); // Kimhello
// person2.hello를 쓰고 싶을 때

person.hello.apply(person2, [1, 2]);
person.hello.call(person2, 1, 2);

console.log({...person, ...person2});
