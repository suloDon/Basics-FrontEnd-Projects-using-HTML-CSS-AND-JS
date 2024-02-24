const products = [{
    cloths_image:"image/d7047095304a34c7e7f3207347e4c382.jpg",
    cloths_name: 'Pack Of 5 Pieces Roober Cotton Boxer For Men - Multicolor ...',
    price: 1259,
    del_price:1599,
    discount: '-21%',
    rating: 33
}]


products.forEach((products)=>{
    const HTML = document.querySelector('.main_js').innerHTML = 
        `     
            <div class="middle">
            <img class="cloths" src= ${products.cloths_image}
            <div class="down">
            <a href="">${products.cloths_name}</a>
            <p class="price_tag">Rs. ${products.price}</p>
            <div class="discount_roe">
                <p id="dele"><del>Rs: ${products.del_price}</del> ${products.discount}</p>
                <div class="free_tag">
                    <img class="free" src="image/free_batch.png" alt="free_batch">
                </div>
            </div>    
                <div class="last_row">
                    <div class="star_batch">
                        <img class="star" src="image/star.svg" alt="Star batch">
                        <img class="star" src="image/star.svg" alt="Star batch">
                        <img class="star" src="image/star.svg" alt="Star batch">
                        <img class="star" src="image/star.svg" alt="Star batch">
                        <img class="star" src="image/star.svg" alt="Star batch">
                        <p id="rating_numb">(${products.rating})</p>
                    </div>
                    <div class="side__">
                        <p id="last">Free shipping</p>
                    </div>
                </div>
            </div>`
});
