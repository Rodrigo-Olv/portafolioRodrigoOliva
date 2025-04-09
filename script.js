window.addEventListener('scroll', function() {
    const header = document.getElementById('myHeader');
    const scrollPosition = window.scrollY;
    const screenHeight = window.innerHeight;
  
    // Calculamos el 25% de la altura de la pantalla
    const threshold = screenHeight * 0.25;
  
    // Si el scroll supera el 25% de la pantalla, mostramos el header
    if (scrollPosition > threshold) {
      header.classList.remove('hidden');
    } else {
      header.classList.add('hidden');
    }
  });
  