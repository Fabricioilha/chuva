let menu = document.querySelector(".screen_menu_mobile");
let pos = 1;
function toggleMenu(){
    if(pos === 1){
        menu.style.display="flex";
        pos = 0;
    }else{
        menu.style.display = "none";
        pos = 1;
    }
}