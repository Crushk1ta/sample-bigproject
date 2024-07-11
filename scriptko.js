document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        
    });
});
/*Loading */
function showLoader(event) {
    event.preventDefault();
    document.getElementById('loader').style.display = 'block';
    setTimeout(function() {
        window.location.href = 'index2.html';
    }, 1000); // Adjust the delay as needed
}
/*Button sa project image */
function changeImage(button, direction) {
    const projectItem = button.closest('.project-item');
    const images = projectItem.querySelectorAll('.project-images img');
    let currentIndex = Array.from(images).findIndex(img => img.classList.contains('active'));

    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + direction + images.length) % images.length;
    images[currentIndex].classList.add('active');
}
/**Dito naman read more button script */
function changeImage(button, step) {
    const projectItem = button.closest('.project-item');
    const images = projectItem.querySelectorAll('.project-images img');
    const activeImage = projectItem.querySelector('.project-images .active');
    const index = Array.from(images).indexOf(activeImage);
    let newIndex = index + step;

    if (newIndex < 0) {
        newIndex = images.length - 1;
    } else if (newIndex >= images.length) {
        newIndex = 0;
    }

    activeImage.classList.remove('active');
    images[newIndex].classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {
    const readMoreButtons = document.querySelectorAll('.read-more');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const projectInfo = this.parentElement;
            projectInfo.classList.toggle('show');
        });
    });
});
/**project section read more */

