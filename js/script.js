// queryselectors + variable declarations
let bannerSlide = document.getElementsByClassName('slideshow');
let slideIndex = 0;
let slideTimeout;
const submitButton = document.getElementById('submitContactForm');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

// scrollnavbar
document.addEventListener('scroll', () => {
  const navbar = document.querySelector('nav')
  if (window.scrollY > 0) {
    navbar.classList.add('scroll');
  }
  else {
    navbar.classList.remove('scroll');
  }
})

// next, prev slide function
const nextSlides = () => {
  bannerSlide[slideIndex].classList.remove('active');
  slideIndex += 1;
  if (slideIndex >= bannerSlide.length) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
}

const prevSlides = () => {
  bannerSlide[slideIndex].classList.remove('active');
  slideIndex -= 1;
  if (slideIndex < 0) {
    slideIndex = (bannerSlide.length - 1);
  }
  showSlide(slideIndex);
}

// next, prev eventlistener
nextButton.addEventListener('click', () => nextSlides(slideIndex))
prevButton.addEventListener('click', () => prevSlides(slideIndex))

// showslide
const showSlide = (slideIndex) => {
  bannerSlide[slideIndex].classList.add('active');
  clearTimeout(slideTimeout);
  slideTimeout = setTimeout(() => nextSlides(slideIndex), 4000);
} 

// showslide on body load
window.onload = showSlide(slideIndex);

// alert validation
submitButton.addEventListener('click', () => {
  // selector form
  const nameInput = document.getElementById('contactName').value;
  const emailInput = document.getElementById('contactEmail').value;
  const optionInput = document.getElementById('contactInterest').value;

  // selector alert
  const alertName = document.getElementById('nameAlert');
  const alertEmail = document.getElementById('emailAlert');
  const alertOption = document.getElementById('optionAlert');

  alertName.classList.remove('alerted');
  alertEmail.classList.remove('alerted');
  alertOption.classList.remove('alerted');

  if (!nameInput || nameInput == '') {
    alertName.classList.add('alerted');
  }
  if (!emailInput || !emailInput.includes('@')) {
    alertEmail.classList.add('alerted');
  }
  if (!optionInput) {
    alertOption.classList.add('alerted');
  }

  console.log(`name: ${nameInput}, email: ${emailInput}, option: ${optionInput}`);
})