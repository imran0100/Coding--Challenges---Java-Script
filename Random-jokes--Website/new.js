let btn = document.querySelector(".btn");
let display = document.querySelector(".disp-joke");
btn.addEventListener("click", apiData);
async function apiData() {
  const result = await fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: { accept: "text/plain" },
  });

  display.innerHTML = await result.text();
}
