new Swiper(".items-slider", {
  direction: "horizontal",
  loop: false,
  spaceBetween: 16,
  width: 238,
  breakpoints: {
    768: {
      enabled: false,
      width: 222,
      spaceBetween: 24,
    },
    1120: {
      enabled: false,
      width: 238,
      spaceBetween: 32,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
});

let itemSlider = document.querySelector(".items-slider");
let btnHiddenCard = document.querySelector(".swiper__btn");
let sum = 1;

btnHiddenCard.addEventListener("click", function () {
  sum += 1;
  itemSlider.classList.toggle("items-slider");
  if (sum % 2 === 0) {
    btnHiddenCard.children[1].textContent = "Скрыть";
    btnHiddenCard.children[1].style.paddingLeft = "7px";
    btnHiddenCard.children[0].style.top = "-3px";
    btnHiddenCard.children[0].src = "/icon/expand-close.svg";
    btnHiddenCard.style.marginBottom = "14px";
  } else {
    btnHiddenCard.children[1].textContent = "Показать все";
    btnHiddenCard.children[1].style.paddingLeft = "0";
    btnHiddenCard.children[0].src = "/icon/icon-open.svg";
    btnHiddenCard.children[0].style.top = "3px";
    btnHiddenCard.style.marginBottom = "32px";
  }
});
