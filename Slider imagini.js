<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Image Slider</title>
  <style>
    #slider-container {
      position: relative;
      max-width: 600px;
      margin: auto;
    }

    .slider-image {
      display: none;
      width: 100%;
      height: auto;
    }

    #prevBtn, #nextBtn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      font-size: 18px;
      cursor: pointer;
      background-color: #f1f1f1;
      border: none;
      padding: 10px;
    }
  </style>
</head>
<body>

<div id="slider-container">
  <button id="prevBtn" onclick="prevSlide()">Precedenta</button>
  <img class="slider-image" src="image1.jpg" alt="Image 1">
  <img class="slider-image" src="image2.jpg" alt="Image 2">
  <img class="slider-image" src="image3.jpg" alt="Image 3">
  <button id="nextBtn" onclick="nextSlide()">Următoarea</button>
</div>

<script>
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slider-image');
  const totalSlides = slides.length;

  function showSlide(index) {
    slides.forEach((slide) => (slide.style.display = 'none'));
    slides[index].style.display = 'block';
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
  }


  setInterval(nextSlide, interval);
</script>

</body>
</html>
