document.addEventListener("DOMContentLoaded", function() {
    // After the page loads, display the intro page for a few seconds before transitioning to the main page
    setTimeout(function() {
      const introPage = document.querySelector('.intro-page');
      const mainPage = document.querySelector('.main-page');
  
      introPage.style.opacity = '0';
      introPage.style.visibility = 'hidden';
      mainPage.style.opacity = '1';
      mainPage.style.visibility = 'visible';
    }, 3000); // Adjust the time (in milliseconds) as per your preference

    function spinCat(){
      const catImage = document.querySelector('CAT.png');

      catImage.style.transform = 'rotateY(120deg)';
      catImage.style.transform = 'rotateY(120deg)';
      catImage.style.transform = 'rotateY(120deg)';
    }

    const catImage = document.querySelector('CAT.png');
    catImage.addEventListener('click', spinCat);

  });
