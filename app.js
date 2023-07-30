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
    ShowMenuItems();
   }else{
    //Menu icindekiler tekrar ekrana basılmasın diye icindekilerini sildik.
    DeleteContents();
   }
   function ShowMenuItems(){
    let Items=["Ana Menü","Hakkımızda","Eğitimlerimiz","Bize Ulaşın","Sosyal Medyalarımız"];
    Items.forEach(ShowItems);
    function ShowItems(item){
        let liDOM=document.createElement("li");
        liDOM.classList.add("menu-item");
        liDOM.innerHTML=`
            <a href="#">${item}</a>
        `;
        MENU.append(liDOM);
    }
   }
   function DeleteContents(){
    while (MENU.firstChild) {
        MENU.removeChild(MENU.firstChild);
    }
   }
}