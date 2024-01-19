let sub_button = document.querySelector("#sub_button");
let button_fleche = document.querySelector("#button_fleche");
let button2 = document.querySelector("#button2");
let i = 0;
sub_button.addEventListener("click", () => {
  if (i === 0) {
    sub_button.style = "color: black";
    sub_button.style.backgroundColor = "rgb(173, 173, 173)";
    sub_button.textContent = "Message ✉️";
    sub_button.style.width = "90px";
    i = 1;

    button2.textContent = "❌"
    button2.style.backgroundColor = "rgb(173, 173, 173)"
  }
});

button2.addEventListener("click", () => {
    if (i === 1) {
      sub_button.style = "color: white";
      sub_button.style.backgroundColor = "rgb(220, 32, 32)";
      sub_button.textContent = "Suivre";
      sub_button.style.width = "50px";
      i = 0;
  
      button2.textContent = "Message ✉️";
      button2.style.backgroundColor = "white"
    }
  });
