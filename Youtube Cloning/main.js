const button = document.querySelector(".bnt");

const sideBAr = document.querySelector(".side_bar");

let bot = true;
button.addEventListener("click",()=>{
    if(bot){
        sideBAr.classList.add('non');
        bot = false;
    }else{
        sideBAr.classList.remove('non');
        bot = true
    }  
})