import { header } from "../header/header";

// Создаем элементы слайдера через DOM
const sliderContainer = document.createElement("div");
sliderContainer.classList.add("slider-container");

const sliderTrack = document.createElement("div");
sliderTrack.classList.add("slider-track");

sliderContainer.appendChild(sliderTrack);

// Создаем индикаторы
const indicators = document.createElement("div");
indicators.classList.add("indicators");

sliderContainer.appendChild(indicators);

// Добавляем кнопки переключения
const leftButton = document.createElement("button");
leftButton.classList.add("slider-button", "left");
leftButton.innerHTML = "‹";
sliderContainer.appendChild(leftButton);

const rightButton = document.createElement("button");
rightButton.classList.add("slider-button", "right");
rightButton.innerHTML = "›";
sliderContainer.appendChild(rightButton);

// Добавляем слайдер в body
header.after(sliderContainer);

// Массив с картинками
const images = [
  "https://images.pexels.com/photos/5885454/pexels-photo-5885454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/5993378/pexels-photo-5993378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/6303683/pexels-photo-6303683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/6249674/pexels-photo-6249674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/6238122/pexels-photo-6238122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

// Добавляем изображения и индикаторы
images.forEach((imageSrc, index) => {
  const slide = document.createElement("div");
  slide.classList.add("slide");
  slide.style.backgroundImage = `url(${imageSrc})`;
  sliderTrack.appendChild(slide);

  const indicator = document.createElement("div");
  indicator.classList.add("indicator");
  if (index === 0) indicator.classList.add("active");
  indicator.setAttribute("data-index", index);
  indicators.appendChild(indicator);
});

// Логика перемещения слайдера
let currentIndex = 0;

function moveSlider(index) {
  sliderTrack.style.transform = `translateX(-${index * 100}%)`;
  document.querySelectorAll(".indicator").forEach((indicator, i) => {
    indicator.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  moveSlider(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  moveSlider(currentIndex);
}

setInterval(nextSlide, 3000);

// Клик по индикаторам
indicators.addEventListener("click", (e) => {
  if (e.target.getAttribute("data-index")) {
    currentIndex = parseInt(e.target.getAttribute("data-index"));
    moveSlider(currentIndex);
  }
});

// Клик по кнопкам переключения
leftButton.addEventListener("click", prevSlide);
rightButton.addEventListener("click", nextSlide);

export { sliderContainer };
