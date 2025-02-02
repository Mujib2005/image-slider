let index = 0;

function showSlide(n) {
    let slides = document.querySelectorAll('.slide');
    let dots = document.querySelectorAll('.dot');
    if (n >= slides.length) { index = 0; }
    if (n < 0) { index = slides.length - 3; }

    document.querySelector('.slider').style.transform = `translateX(${-index * 33.9}%)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

function nextSlide() {
    index++;
    showSlide(index);
}

function prevSlide() {
    index--;
    showSlide(index);
}

function currentSlide(n) {
    index = n;
    showSlide(index);
}

// Auto slide every 3 seconds
setInterval(() => nextSlide(), 2000);

document.addEventListener('DOMContentLoaded', () => showSlide(index));
