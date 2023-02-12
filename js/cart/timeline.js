$(document).ready(function () {
  $("#body").load(`pages/cart/cartProducts.html`);

  // appear timeline
  const timelineMenu = document.getElementById("timeline-menu");

  fetch("../json/timeline.json")
    .then((respone) => respone.json())
    .then((timelineMenuJson) => {
      let htmlTimeLineMenu = "";
      timelineMenuJson.forEach((menu) => {
        htmlTimeLineMenu += `
            <div class="col l-2 timeline-title-item" data-slug="${menu.slug}">
                <span class="timeline-item-text timeline-item-text-info"
                >${menu.text}
                </span>
            </div>
            `;
      });
      timelineMenu.innerHTML = htmlTimeLineMenu;

      // done appear timeline menu
      const items = document.querySelectorAll(".timeline-title-item");
      items.forEach((item) => {
        let checkSlug = "";
        item.onclick = function () {
          checkSlug = item.getAttribute("data-slug");
          loadData(checkSlug);
          removeActive(checkSlug);
        };
      });

      function removeActive(checkSlug) {
        items.forEach((item) => {
          if (item.getAttribute("data-slug") === checkSlug) {
            item.classList.add("timeline-title-item-active");
          } else {
            item.classList.remove("timeline-title-item-active");
          }
        });
      }

      function loadData(checkSlug) {
        let path = `pages/cart/${checkSlug}.html`;
        if (checkFileExists(path)) {
          $("#body").load(path);
        } else {
          alert(
            `create file ${checkSlug}.html in pages/cart/${checkSlug}.html`
          );
        }
      }

      function checkFileExists(url) {
        let http = new XMLHttpRequest();
        http.open("HEAD", url, false);
        http.send();
        if (http.status === 200) {
          return true;
        }
        return false;
      }
    });
});
