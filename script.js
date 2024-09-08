document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running'; // Start the animation when the element is in view
        }
      });
    });
  
    const animatedElements = document.querySelectorAll('.typing-container h1, .typing-container p, .typing-container a, #frameimg img');
    
    animatedElements.forEach((el) => {
      observer.observe(el); // Observe each animated element
    });
  });
  
