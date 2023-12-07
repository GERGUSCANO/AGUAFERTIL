document.addEventListener('DOMContentLoaded', function () {
    const header = document.getElementById('main-header');
  
    window.addEventListener('scroll', function () {
      if (window.scrollY > 100) {
        header.style.backgroundColor = '#ffffff'; // Cambia el color al hacer scroll hacia abajo
      } else {
        header.style.backgroundColor = '#333'; // Restaura el color original al volver arriba
      }
    });
  });
  