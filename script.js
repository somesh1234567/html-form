const main = document.getElementById("name");
const form = document.getElementById("form");
const mistake = document.getElementById("error");

form.addEventListener("submit", (e) => {
  let message = [];
  const a = /^[A-Za-z0-9 ]+$/;
  const b = a.test(document.getElementById("name").value);
  const c = main.innerText[0];
  if (main.value.length <= 4 || !b || c == "-" || c == "+" || c == "_") {
    console.log("error found!");
    alert("error!!");
  }

  if (message.length > 0) {
    e.preventDefault();
    mistake.innerText = message.join(", ");
  }
});
