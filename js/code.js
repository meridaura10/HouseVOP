function navAnim() {
  let burger = document.querySelector('.burger');
  let nav    = document.querySelector('.nav');
  burger.addEventListener('click', function () {
    nav.classList.toggle('active');
  })
};

navAnim();
