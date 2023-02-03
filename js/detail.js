
$(document).ready(function () {
  const image = document.getElementById("prod-image");
  const name = document.getElementById("prod-name");
  const cost = document.getElementById("prod-cost");
  let pathName = window.location.search;
  let id = pathName.replace(/^\D+/g, '');
  fetch("../json/products.json").then(function (response) {
    return response.json();
  }).then(function (viralJson) {
    let detail = viralJson.filter((e) => e.id === parseInt(id))[0]
    console.log(detail)
    image.setAttribute("src", detail.image);
    name.innerHTML = detail.name;
    // name, cost. Beside add description to products.json
  })
})
