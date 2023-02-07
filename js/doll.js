$(document).ready(function () {
    const listPro = document.getElementById('grid_list_product');

    fetch("../json/productDoll.json")
    .then((response) => response.json())
    .then((listProArr) => {
        let listProHtml = "";
        listProArr.forEach((itemPro) => {
            listProHtml += `
            <div class="col l-2-4 m-4 c-6"">                               
                <a class="home-product-item" href="../pages/buy_product.html">
                    <div class="home-product-item__img" style="background-image: url(${itemPro.image});"></div>
                    <h4 class="home-product-item__name">${itemPro.name}</h4>
                    <div class="home-product-item__price">
                        <span class="home-product-item__price-old">${itemPro.old_cost}</span>
                        <span class="home-product-item__price-current">${itemPro.new_cost}</span>
                    </div> 
                    
                    <div class="home-product-item__favorite">
                        <i class="fa-solid fa-check"></i>                                            
                        <span>Favorite</span>
                    </div>
                    <div class="home-product-item___sale-off">
                        <span class="home-product-item___sale-off-precent">43%</span>
                        <span class="home-product-item___sale-off-label">DISCOUNT</span>
                    </div>        
                </a>
            </div>
            `
        });
        listPro.innerHTML = listProHtml
    });
});
