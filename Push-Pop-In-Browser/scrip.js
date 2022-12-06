let input = document.querySelector(".input");
let pus = document.querySelector(".pus");
let pop = document.querySelector(".pop");
let dis = document.querySelector(".disp");
let arr = [];
pus.addEventListener("click", () => {
  inp = input.value;
  if (inp == "") {
    alert("Please write something");
    return;
  }

  arr.push(inp);

  dis.innerHTML = arr;

  input.value = "";
});
pop.addEventListener("click", () => {
  if (arr.length == 0) {
    alert("stack is empty");
  }
  arr.pop();

  dis.textContent = arr;
});
