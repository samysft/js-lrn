function changeColor() {
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#F333FF", "#FFD700"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById('colorBox').style.backgroundColor = randomColor;
}
