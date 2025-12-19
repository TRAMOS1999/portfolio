const box = document.getElementById("click-box");



const colors = ["red", "blue", "green", "purple", "orange"];
let currentColorIndex = 0;
function changeColor() {
    box.style.backgroundColor = colors[currentColorIndex];
    currentColorIndex++;

    if (currentColorIndex >= colors.length) {
        currentColorIndex = 0;
    }
}



box.addEventListener("click",changeColor);