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