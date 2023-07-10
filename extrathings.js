for (let i = 1; i < 6; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}

let obj = new Object({name: 'kim'});
console.log(obj);
