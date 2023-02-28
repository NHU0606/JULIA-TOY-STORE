
$(document).ready(function() {
  $(".content").load(`pages/cart/cartProducts.html`)
  
  const circleActive = document.querySelectorAll('.circle-check')
  const timeLine = document.querySelector(".timeline-line")
  const contentTimeline = document.querySelector(".content")

  // circleActive.forEach(circle => {  
  //   // if(circle.getAttribute("data-check") === "allproduct") {
  //     //   circle.classList.add("circle-check-active")
  //     // }
  //     circle.onclick = function() {  
  //       circle.classList.add("circle-check-active")
  //       if ($(".content").load(`pages/cart/cartProducts.html`)) {
  //           timeLine.classList.add("timeline-line")
  //           
  //     } else 
  //       if ($(".content").load(`pages/cart/identify.html`)) {                
  //           timeLine.classList.add("timeline-line-half")
  //           // contentTimeline.style.transition = "all 2s ease-out";
  //           
  //     } else 
  //       if ($(".content").load(`pages/cart/payment.html`)) {
  //           timeLine.classList.add("timeline-line-done")
  //           
  //     }
  //   }

  // })


        

})
