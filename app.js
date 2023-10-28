const sliderCard = document.querySelector('.cards');
const cardWidth = sliderCard.querySelector(".card").offsetWidth;
const arrow = document.querySelectorAll('.slider i');

let isDragging = false, startX, startScrollLeft, timeUp = null;

const autoPlayCarrousel = () => {
   timeUp = setInterval(() => sliderCard.scrollLeft += cardWidth, 1500);
}

autoPlayCarrousel();

const moveSlider = (e) => {
    clearInterval(timeUp);
       sliderCard.scrollLeft += e.target.classList.contains("left")
         ? cardWidth
         : -cardWidth;


//    if(e.target.classList.contains('left')) {
//     sliderCard.scrollBy({
//       left: cardWidth || -cardWidth,
//       top: 0,
//       behavior: "smooth",
//     });

//    } else {
//      sliderCard.scrollBy({
//        left: -cardWidth,
//        top: 0,
//        behavior: "smooth",
//      });
//     }
}

arrow.forEach(fleche => {
    fleche.addEventListener('click', moveSlider)
})

const draggStart = (e) => {
    isDragging = true;
    sliderCard.classList.add('dragging');
    startX = e.pageX;
    startScrollLeft = sliderCard.scrollLeft
}

const dragging = (e) => {
    clearInterval(timeUp);
    if(!isDragging) return;
    sliderCard.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const draggStop = () => {
    isDragging = false;
    sliderCard.classList.remove("dragging");
}

sliderCard.addEventListener('mousedown', draggStart)
sliderCard.addEventListener('mousemove', dragging)
sliderCard.addEventListener('mouseup', draggStop)

