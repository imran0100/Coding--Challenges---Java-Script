const input = document.querySelector(".input");
const displayText = document.querySelector(".disDataDom");

let data;
let newData = [];
const displayData = async () => {
  let result = await fetch("https://jsonplaceholder.typicode.com/users");
  data = await result.json();
  data.forEach((element) => {
    newData.push(element.name);
    let dispData = `<div class="msg">${element.name}</div>`;
    displayText.insertAdjacentHTML("afterbegin", dispData);
  });
};
displayData();
// for (let element of newData) {
//   console.log(element);
// }
function searchdara() {
  let diva = displayText.getElementsByTagName("div");
  for (let i = 0; i < diva.length; i++) {
    // let td = diva[i];

    let textvalu = diva[i].textContent || diva[i].innerHTML;
    if (textvalu.toUpperCase().indexOf(input.value.toUpperCase()) > -1) {
      diva[i].style.display = "";
    } else {
      diva[i].style.display = "none";
    }
  }
}
