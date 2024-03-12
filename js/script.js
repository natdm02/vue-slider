const images = [
  {
      image: 'img/01.webp',
      title: 'Marvel\'s Spiderman Miles Morale',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, quisquam?',
  }, {
      image: 'img/02.webp',
      title: 'Ratchet & Clank: Rift Apart',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, quisquam?',
  }, {
      image: 'img/03.webp',
      title: 'Fortnite',
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, quisquam?",
  }, {
      image: 'img/04.webp',
      title: 'Stray',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, quisquam?',
  }, {
      image: 'img/05.webp',
      title: "Marvel's Avengers",
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, quisquam?',
  }
];

const mainContainerEl = document.getElementById("main-image");
const mainImageTextEl = document.getElementById("main-image-text");
const sliderEl = document.getElementById("slider-container");



const previousEl = document.getElementById("previous-carousel");
const nextEl = document.getElementById("next-carousel");
let activeImage = 0;
let index = 0;

  for (const image of images){
    const imgMain = document.createElement("img");
    const imgSlider = document.createElement("img");
  
    const divTextEl = document.createElement("div");
    const divSliderEl = document.createElement("div");

    const imgTitle = document.createElement("h2");
    const imgText = document.createElement("p");
  
    imgMain.src = image.image;
    imgSlider.src = image.image;
  
    imgTitle.innerHTML = image.title;
    imgText.innerHTML = image.text;
    
    divSliderEl.classList.add("cover");
    imgMain.classList.add("main-img");
    if(index == 0){
      divSliderEl.classList.add("border");
      imgMain.classList.add("active");
      divTextEl.classList.add("active");
    }
  
    if(index > 0){
      imgMain.classList.add("hide");
      divTextEl.classList.add("hide");
      divSliderEl.classList.add("item");
  
    }


    mainContainerEl.append(imgMain);
    sliderEl.append(divSliderEl);
    divSliderEl.append(imgSlider);
    mainImageTextEl.append(divTextEl);
    divTextEl.append(imgTitle, imgText);
    index++;
  }
  
  nextEl.addEventListener("click", function(){
    
    const coverSlides = document.querySelectorAll(".cover");
    const imgSlides = document.querySelectorAll(".main-img");
    const textSlides = document.querySelectorAll("#main-image-text div");
    

    imgSlides[activeImage].classList.remove("active");
    imgSlides[activeImage].classList.add("hide");

    textSlides[activeImage].classList.remove("active");
    textSlides[activeImage].classList.add("hide");


    coverSlides[activeImage].classList.add("item");
    coverSlides[activeImage].classList.remove("border");

    activeImage++;
    
    if(activeImage >= coverSlides.length){
      activeImage = 0;
    }
    imgSlides[activeImage].classList.add("active");
    imgSlides[activeImage].classList.remove("hide");

    textSlides[activeImage].classList.add("active");
    textSlides[activeImage].classList.remove("hide");

    coverSlides[activeImage].classList.add("border");
    coverSlides[activeImage].classList.remove("item");
    
    
  });



previousEl.addEventListener("click", function () {
  const coverSlides = document.querySelectorAll(".cover");
  const imgSlides = document.querySelectorAll(".main-img");
  const textSlides = document.querySelectorAll("#main-image-text div");

  imgSlides[activeImage].classList.remove("active");
  imgSlides[activeImage].classList.add("hide");

  textSlides[activeImage].classList.remove("active");
  textSlides[activeImage].classList.add("hide");

  coverSlides[activeImage].classList.add("item");
  coverSlides[activeImage].classList.remove("border");

  activeImage--;

  if (activeImage < 0) {
    activeImage = coverSlides.length - 1;
  }

  imgSlides[activeImage].classList.add("active");
  imgSlides[activeImage].classList.remove("hide");

  textSlides[activeImage].classList.add("active");
  textSlides[activeImage].classList.remove("hide");

  coverSlides[activeImage].classList.add("border");
  coverSlides[activeImage].classList.remove("item");
    
});







