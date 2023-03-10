$(document).ready(function () {
  const newViral = document.getElementById("new-viral--form");

  fetch("../json/product.json")
    .then((response) => response.json())
    .then((newViralArray) => {
      let viralItem = "";
      newViralArray.forEach((item) => {
        // console.log(item.category.include)
        if (item.category.include === "viral") {
          viralItem += `
                <div class="col l-3 m-6 c-6 newviral--item">
                    <a class="home-product-item" href="?id=${item.id}">
                        <div class="home-product-item__img"
                            style="background-image: url(${item.image});">
                        </div>
                        <h4 class="home-product-item__name">${item.name}</h4>
                        <div class="home-product-item__price">
                            <span class="home-product-item__price-old">$${item.old_cost}</span>
                            <span class="home-product-item__price-current">$${item.new_cost}</span>
                        </div>
                        <div class="home-product-item___sale-off">
                            <span class="home-product-item___available-precent">${item.category.available}</span>
                            <span class="home-product-item___available-label">AVAILABLE</span>
                        </div>
                    </a>
                </div>
                `;
        }
      });
      newViral.innerHTML = viralItem;
    });
});
