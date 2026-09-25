const viewport = document.querySelector('.slider__viewport');
const prevButton = document.querySelector('.sliders__arrow--prev');
const nextButton = document.querySelector('.sliders__arrow--next');
nextButton.addEventListener('click',() => {viewport.scrollLeft += 336});
prevButton.addEventListener('click',() => {viewport.scrollLeft -= 336});
function animate(){
    viewport.scrollLeft += 1;
    if (viewport.scrollLeft >= 1344) {
    viewport.scrollLeft = 0;}
    requestAnimationFrame(animate);
}
requestAnimationFrame(animate);