const display = document.querySelector('.newAccount');


const click = document.querySelector('.btn_two')
.addEventListener("click", ()=>{
    let x = true;
    if(x){
        display.classList.add('xpp')
        x = false
    }else{
        display.classList.remove('xpp')
    }
})