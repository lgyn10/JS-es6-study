// 알파벳들의 출현 갯수를 세어주는 함수
// rest parameter 문제
const alphaCnt = (e) => {
  let cntObj = {};
  let strArr = [...e];
  for (let k of strArr) {
    if (cntObj[k] != undefined) cntObj[k]++;
    else cntObj[k] = 1;
  }
  console.log(cntObj);
};
alphaCnt('aabbddccaaa');
