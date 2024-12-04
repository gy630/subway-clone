const swiper = new Swiper('.main_slider', {
  // Optional parameters
  direction:'horizontal',

  loop: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});




/* gnb - sub menu */
const $header = document.querySelector('header')
const $gnb_wrap = document.querySelector('.gnb_wrap')
const $sub_menu = document.querySelector('.sub_menu')


$gnb_wrap.addEventListener('mouseover',()=>{
  $header.classList.add('on')
})

$gnb_wrap.addEventListener('mouseleave',()=>{
  $header.classList.remove('on')
})

