// constructor 문법

// constructor는 대문자로 시작
function Student(name) {
  this.name = name;
  this.age = 20;
  this.func = function () {
    console.log(`제 이름은: ${this.name} 입니다.`);
  };
}

let s1 = new Student('Kim');
let s2 = new Student();
console.log(s1);
console.log(s2);
s1.func();
