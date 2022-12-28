let btn = document.querySelector(".btn");
let display = document.querySelector(".feri");
let data;
let dis;
btn.addEventListener("click", apiData);
async function apiData() {
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  data = await result.json();
  data.forEach(function (mov) {
    const html = `<div>${mov.name}</div>`;
    display.insertAdjacentHTML("afterbegin", html);
  });
}
