let sub_button = document.querySelector("#sub_button");
let button_fleche = document.querySelector("#button_fleche");
let button2 = document.querySelector("#button2");
let i = 0;
sub_button.addEventListener("click", () => {
  if (i === 0) {
    sub_button.style = "color: black";
    sub_button.style.backgroundColor = "rgb(173, 173, 173)";
    sub_button.innerHTML = "Message ✉️";
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

let b = document.querySelector("#button_fleche");
let b_cache = document.querySelector("#button_fleche_cache");
let zone_sugestion = document.querySelector("#zone_sugestion");

let etatb3 = 0;

b.addEventListener("click", () => {
  if (etatb3 === 0) {
    b.style.display = "none";
    b_cache.style.display = "flex";
    zone_sugestion.style.display = "block";
    etatb3 = 1;
  }
});
b_cache.addEventListener("click", () => {
  if (etatb3 === 1) {
    b.style.display = "flex";
    b_cache.style.display = "none";
    zone_sugestion.style.display = "none";
    etatb3 = 0;
  }
});