const slidesData = [
  {
    text: "¡Hola bienvenidos Amis estados! Gracias por aparecer y hacer que mi vida sea más significativa.  Creador VIC 👿 PERSI", //[span_0](start_span)[span_0](end_span)
    gif: "https://i.pinimg.com/originals/b6/b1/d6/b6b1d64609f266d8f236752d8551f26f.gif", //[span_1](start_span)[span_1](end_span)
  },
  {
    text: "Solo espero que hoy sonrías siempre, porque tu sonrisa es lo más hermoso para mí. Creaado VIC 👿 PERSI", //[span_2](start_span)[span_2](end_span)
    gif: "https://i.pinimg.com/originals/3f/4e/d3/3f4ed3cb1539cb42dc93b78020a3ef55.gif", //[span_3](start_span)[span_3](end_span)
  },
  {
    text: "No importa qué tan ocupado estés hoy, recuerda que siempre hay alguien que te ama en silencio y te sigue los pasos. Creador VIC 👿 PERSI", //[span_4](start_span)[span_4](end_span)
    gif: "https://i.pinimg.com/originals/b7/c6/4a/b7c64aca651271c52087f58276bd1de1.gif", //[span_5](start_span)[span_5](end_span)
  },
  {
    text: "Espero que todo lo bueno llegue a ti, porque mereces recibir lo más maravilloso. Creador VIC 👿 PERSI", //[span_6](start_span)[span_6](end_span)
    gif: "https://i.pinimg.com/originals/7e/f6/9c/7ef69cd0a6b0b78526c8ce983b3296fc.gif", //[span_7](start_span)[span_7](end_span)
  },
  {
    text: "Si alguna vez te sientes cansad@, recuerda que siempre estoy aquí para escucharte, compartir y abrazarte muy fuerte. Creador VIC 👿 PERSI", //[span_8](start_span)[span_8](end_span)
    gif: "https://i.pinimg.com/originals/4e/89/d3/4e89d3e4ec4b1f59b1664e880a875c65.gif", //[span_9](start_span)[span_9](end_span)
  },
  {
    text: "Con solo que seas feliz, para mí ya es el regalo más maravilloso de todos los días. Creador VIC 👿 PERSI", //[span_10](start_span)[span_10](end_span)
    gif: "https://i.pinimg.com/originals/fd/60/15/fd6015dd3f31d0223374f993f66e85d3.gif", //[span_11](start_span)[span_11](end_span)
  },
  {
    text: "Recuerden que solo se vive. y vivela al 1000%,  De parte de VIC 👿 PERSI su amigo y servidor 😊.", //[span_12](start_span)[span_12](end_span)
    gif: "https://i.pinimg.com/originals/56/80/90/5680904ede54bea21d02450affebfc4f.gif", //[span_13](start_span)[span_13](end_span)
  },
];

const localImages = Array.from(
  { length: 10 },
  (_, i) => `./style/img/Anh%20(${i + 1}).jpg`,
);

let currentSlide = 0;
let finaleShown = false;
let currentHackerInterval = null;
let advanceTimeout = null;
const totalSlides = slidesData.length;
const starsContainer = document.getElementById("stars");
const introScreen = document.getElementById("intro-screen");
const heart = document.getElementById("heart");
const bgMusic = document.getElementById("bg-music");
const progressDots = document.getElementById("progress-dots");
const slidesContainer = document.getElementById("slides");
const fallingContainer = document.getElementById("falling-container");
let slides;

function createSlides() {
  slidesData.forEach((data, index) => {
    const slide = document.createElement("div");
    slide.classList.add("slide");
    slide.id = `slide${index + 1}`;

    const message = document.createElement("div");
    message.classList.add("message");
    message.id = `message${index + 1}`;

    const hackerText = document.createElement("div");
    hackerText.classList.add("hacker-text");
    message.appendChild(hackerText);

    const img = document.createElement("img");
    img.src = data.gif;
    img.alt = data.alt;

    slide.appendChild(message);
    slide.appendChild(img);
    slidesContainer.appendChild(slide);
  });

  slides = document.querySelectorAll(".slide");
}

function init() {
  createSlides();
  createProgressDots();
  preloadImages();
  setEventListeners();
  program();
}

function createProgressDots() {
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dot.setAttribute("data-index", i);
    if (i === 0) dot.classList.add("active");
    progressDots.appendChild(dot);
  }
}

function preloadImages() {
  const images = document.querySelectorAll(".slide img");
  images.forEach((img) => {
    const image = new Image();
    image.src = img.src;
  });
}

function program(delay = 200) {
  (function () {
    const _b = (s) => decodeURIComponent(escape(atob(s)));
    const _d = [
      "RGVyZWNob3MgZGUgYXV0b3IgZGUgRHIuR2lmdGVy", // Derechos de autor de Dr.Giftery[span_14](start_span)[span_14](end_span)
      "VGlrdG9rOiBodHRwczovL3d3dy50aWt0b2suY29tL0Bkci5naWZ0ZXIzMDY=", //[span_15](start_span)[span_15](end_span)
      "R2l0aHViOiBodHRwczovL2dpdGh1Yi5jb20vRHJGifHRlci", //[span_16](start_span)[span_16](end_span)
    ];

    setTimeout(() => {
      _d.forEach((x) => console.log(_b(x)));
    }, delay);
  })();
}

const hackerLetters = "01!@#$%^&*()_+-=[]{}|;:,.<>?/";

function hackerEffect(element, finalText, iterations = 3, onComplete) {
  let iteration = 0;
  currentHackerInterval = setInterval(() => {
    element.textContent = finalText
      .split("")
      .map((char, index) => {
        if (index < iteration || char === " ") {
          return finalText[index];
        }
        return hackerLetters[Math.floor(Math.random() * hackerLetters.length)];
      })
      .join("");
    if (iteration >= finalText.length) {
      clearInterval(currentHackerInterval);
      currentHackerInterval = null;
      element.classList.add("complete");
      if (onComplete) onComplete();
    }
    iteration += 1 / iterations;
  }, 30);
}

function startFallingEffect() {
  const fallingSources = [
    ...localImages.map((src) => ({ src, isImage: true })),
    ...slidesData.map((data) => ({ src: data.gif, isImage: false })),
  ];
  const itemCount = 24;

  for (let i = 0; i < itemCount; i++) {
    const { src, isImage } =
      fallingSources[Math.floor(Math.random() * fallingSources.length)];

    const item = document.createElement("img");
    item.classList.add("falling-item");
    if (isImage) item.classList.add("falling-item--image");
    item.src = src;
    item.alt = "";

    const size = Math.random() * 80 + 50;
    item.style.width = `${size}px`;
    item.style.height = `${size}px`;

    item.style.left = `${Math.random() * 95}%`;

    const fallDuration = Math.random() * 6 + 5;
    const delay = Math.random() * 6;

    if (isImage) {
      const borderDuration = Math.random() * 2 + 2;
      item.style.animationDuration = `${fallDuration}s, ${borderDuration}s`;
      item.style.animationDelay = `${delay}s, 0s`;
    } else {
      item.style.animationDuration = `${fallDuration}s`;
      item.style.animationDelay = `${delay}s`;
    }

    fallingContainer.appendChild(item);
  }
}

function createStars() {
  const starCount = 100;

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    const size = Math.random() * 2 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * -100}px`;
    const duration = Math.random() * 10 + 5;
    star.style.animationDuration = `${duration}s`;
    star.style.animationDelay = `${Math.random() * 5}s`;
    starsContainer.appendChild(star);
  }
}

function showSlide(index) {
  if (index < 0) index = totalSlides - 1;
  if (index >= totalSlides) index = 0;
  if (currentHackerInterval) clearInterval(currentHackerInterval);
  if (advanceTimeout) clearTimeout(advanceTimeout);

  currentSlide = index;
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slides[index].classList.add("active");
  document.querySelectorAll(".dot").forEach((dot, i) => {
    if (i === index) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });

  document.querySelectorAll(".hacker-text").forEach((text) => {
    text.classList.remove("complete");
  });

  const messageElement = document.querySelector(
    `#message${index + 1} .hacker-text`,
  );
  const isLastSlide = index === totalSlides - 1;

  hackerEffect(messageElement, slidesData[index].text, 3, () => {
    advanceTimeout = setTimeout(() => {
      if (isLastSlide) {
        if (!finaleShown) {
          finaleShown = true;
          slides[index].classList.remove("active");
          advanceTimeout = setTimeout(startFallingEffect, 1000);
        }
      } else {
        nextSlide();
      }
    }, 2000);
  });
}

function nextSlide() {
  showSlide((currentSlide + 1) % totalSlides);
}

function prevSlide() {
  showSlide((currentSlide - 1 + totalSlides) % totalSlides);
}

function startPresentation() {
  introScreen.style.opacity = "0";
  setTimeout(() => {
    introScreen.style.display = "none";
  }, 1000);

  createStars();
  showSlide(0);

  bgMusic.currentTime = 20;
  bgMusic.play().catch((e) => console.log("La reproducción automática fue bloqueada:", e)); //[span_17](start_span)[span_17](end_span)
}

function setEventListeners() {
  heart.addEventListener("click", startPresentation);

  document.addEventListener("keydown", (e) => {
    if (introScreen.style.display === "none") {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    }
  });

  document.querySelectorAll(".dot").forEach((dot) => {
    dot.addEventListener("click", (e) => {
      const index = parseInt(e.target.getAttribute("data-index"));
      showSlide(index);
    });
  });

  window.addEventListener("load", adjustImages);
  window.addEventListener("resize", adjustImages);
}

function adjustImages() {
  const images = document.querySelectorAll(".slide img");
  const size = Math.min(window.innerWidth * 0.8, window.innerHeight * 0.5, 300);

  images.forEach((img) => {
    img.style.width = `${size}px`;
    img.style.height = `${size}px`;
  });
}

init();
