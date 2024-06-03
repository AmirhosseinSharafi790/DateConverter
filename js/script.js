let input = document.querySelector("input");
let button = document.querySelector("button");
let text = document.getElementById("text");

button.addEventListener("click", () => {
  let date;
  date = new persianDate(new Date(input.value));
  text.innerHTML = date.toLocale("en").format("YYYY-MM-DD");
});
