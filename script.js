let currentIndex = 0;
const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');
const totalSlides = document.querySelectorAll('.slide').length;

function showSlide(index) {
    slides.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

function currentSlide(index) {
    currentIndex = index;
    showSlide(currentIndex);
}

setInterval(nextSlide, 3000);

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide(index);
    });
});

showSlide(currentIndex);
// JavaScript to add in-view class
const features = document.querySelectorAll('.feature');

const isInView = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
};

const checkFeatures = () => {
  features.forEach((feature) => {
    if (isInView(feature)) {
      feature.classList.add('in-view');
    }
  });
};

document.addEventListener("DOMContentLoaded", function() {
    const dropbtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');

    dropbtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
        dropdownContent.classList.toggle('show');
    });

    // Close the dropdown if the user clicks outside of it
    window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropbtn')) {
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
            }
        }
    });
});
