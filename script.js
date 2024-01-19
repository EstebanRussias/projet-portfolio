let sub_button = document.querySelector("#sub_button")
let i = 0;
sub_button.addEventListener("click", () =>{
    if (i===0){
    sub_button.style = "color: black";
    sub_button.style.backgroundColor = "rgb(173, 173, 173)";
    sub_button.innerHTML="Message ✉️";
    sub_button.style.width = "90px";
    i=1;
    }
    else{
    sub_button.style = "color: white";
    sub_button.style.backgroundColor = "rgb(220, 32, 32)";
    sub_button.textContent = "Suivre"
    sub_button.style.width = "50px";
    i=0;
    }
})
