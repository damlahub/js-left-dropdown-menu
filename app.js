const BTN=document.querySelector("#btn");
const MENU=document.querySelector(".menu");

EventListeners();
function EventListeners(){
    BTN.addEventListener("click",ShowMenu)
}
function ShowMenu(){
   let isMenu= MENU.classList.toggle("menu-show");
   console.log(isMenu);
   if(isMenu){
    //Menu icindekiler gösterilecek
   }
}