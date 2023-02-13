$(document).ready(function() {
    const listProductDB = document.getElementById('dashboard-products-list-item')

    fetch("../json/product.json")
    .then(respone => respone.json())
    .then(listproductDBJson => {
        let listproductDBItem = ''
        listproductDBJson.forEach(itemDB => {
            listproductDBItem += `
            <div id="dashboard-product-item" class="col l-3 m-6 c-6 newviral--item">
                <a class="home-product-item" href="#">
                    <div class="home-product-item__img" style=" background-image: url(${itemDB.image});"></div>
                    <h4 class="home-product-item__name">${itemDB.name}</h4>
                    <div class="home-product-item__price">
                    <span class="home-product-item__price-old">${itemDB.old_cost}</span>
                    <span class="home-product-item__price-current">${itemDB.new_cost}</span>
                    </div>
                    <div class="home-product-item___sale-off">
                    <span class="home-product-item___available-precent">${itemDB.category.available}</span>
                    <span class="home-product-item___available-label">AVAILABLE</span>
                    </div>
                </a>
            </div>
            `
        });

        listProductDB.innerHTML = listproductDBItem

        
    })
})