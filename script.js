// Image Click Event to Open Lightbox
const images = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

// Open Lightbox on Image Click
images.forEach(img => {
  img.addEventListener('click', function() {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  });
});

// Close Lightbox on Click
lightbox.addEventListener('click', function() {
  lightbox.style.display = 'none';
});
