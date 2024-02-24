const imageSlider = document.querySelector('.next');

const images = [
    '<img src="Images/two.png" alt="ins" class="second">',
    '<img src="Images/one.png" alt="ins" class="front">',
    '<img src="Images/three.png" alt="ins" class="third">'
]

let img = 0;

function changeImage(){
    const interval = setInterval(()=>{
        img ++;
        if(img >= images.length){
            img = 0;
        }
        imageSlider.innerHTML = images[img];
    }, 5000)

    return interval;
}

changeImage();

