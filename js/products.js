
$(document).ready(function () {
  const viral = document.getElementById("viral");

  fetch("../json/products.json").then(function (response) {
    return response.json();
  }).then(function (viralJson) {
    let htmlViral = '';
    viralJson.forEach((vir) => {
      htmlViral += ` 
        <div class="col l-3 m-6 c-6 newviral--item">
          <a class="home-product-item" href="?id=${vir.id}">
            <div class="home-product-item__img"
                style="background-image: url(${vir.image});">
            </div>
            <h4 class="home-product-item__name">${vir.name}</h4>
            <div class="home-product-item__price">
                <span class="home-product-item__price-old">${vir.old_cost}$</span>
                <span class="home-product-item__price-current">${vir.new_cost}$</span>
            </div>
          </a>
        </div>
      `
    })
    viral.innerHTML = htmlViral;
  })
})
