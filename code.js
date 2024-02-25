function cambiarCSS() {
  var screenWidth = window.innerWidth;
  var cssFile;

  // Si el ancho de la pantalla es menor o igual a 600px, cambia al CSS para pantallas pequeñas
  if (screenWidth < 1024) {
      cssFile = "css/style-responsive.css";
  } else {
      // De lo contrario, utiliza el CSS por defecto
      cssFile = "css/style.css";
  }

  // Obtener el elemento de enlace CSS
  var cssLink = document.getElementById("css-link");

  // Cambiar el atributo href del enlace CSS para cargar el nuevo archivo CSS
  cssLink.setAttribute("href", cssFile);
}

// Ejecutar la función cuando se cargue la página y cuando la ventana cambie de tamaño
window.onload = cambiarCSS;
window.onresize = cambiarCSS;


function drawBubbles(numBubbles) {
    let bubbles = document.querySelector(".bubbles");
    
    for (let i = 0; i < numBubbles; i++) {
      let size = Math.round(Math.random() * (100 - 30) + 30);
      let position = Math.round(Math.random() * (95 - 5) + 5);
      let duration = Math.round(Math.random() * (7 - 3) + 3);
      let delay = Math.round(Math.random() * (3 - 0) + 0);
      let bubble = document.createElement("div");
      
      bubble.classList.add("bubble");
      bubble.style.width = size + "px";
      bubble.style.height = size + "px";
      bubble.style.left = position + "%";
      bubble.style.animationDuration = duration + "s";
      bubble.style.animationDelay = delay + "s";
      
      bubbles.appendChild(bubble);
      
      bubble.addEventListener("animationend", function() {
        this.style.bottom = "-10px";
        this.style.left = Math.round(Math.random() * (95 - 5) + 5) + "%";
        this.style.animationDuration = Math.round(Math.random() * (10 - 5) + 5) + "s";
        this.style.animationDelay = Math.round(Math.random() * (5 - 0) + 0) + "s";
      });
    }
  }
  
var aleatoryNum = Math.round(Math.random() * (20 - 8) + 8);
drawBubbles(aleatoryNum);