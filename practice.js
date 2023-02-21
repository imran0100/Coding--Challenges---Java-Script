// function ab() {
//   return "hii" + " " + this.name;
// }
// let obj = { name: "rahul" };
// let x = ab.call(obj);
// console.log(x);

// function ac(message) {
//   return "hii" + message + this.name;
// }
// let obj = { name: "rahul" };
// let x = ac.call(obj, "hello");
// console.log(x);

const closur = () => {
  let num = 2;
  return function inner() {
    console.log(num);
  };
};
let res = closur();
res();
