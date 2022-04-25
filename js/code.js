function navAnim() {
  let burger = document.querySelector('.burger');
  let nav    = document.querySelector('.nav');
  burger.addEventListener('click', function () {
    nav.classList.toggle('active');
  })
};
function video() {
  let video__play = document.querySelector('.video__play');
  let video       = document.querySelector('.video');
  video.addEventListener('click',function () {
    video__play.classList.toggle('hidden')
  })
}
video();
navAnim();
