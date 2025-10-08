//Day 12 of Daily Tiny Programming
//Moving a ball across the screen using JavaScript and HTML5 Canvas
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');    
let x = 50; // Initial x position
let y = canvas.height / 2;
let dx = 2; // Change in x (speed)
let radius = 15; // Radius of the ball
function drawBall() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);  // Draw the ball
    ctx.fillStyle = '#0095DD';
    ctx.fill();
    ctx.closePath();
    x += dx; // Update x position
    // Reverse direction if ball hits the edge
    if (x + radius > canvas.width || x - radius < 0) {
        dx = -dx;
    }
    requestAnimationFrame(drawBall); // Request next frame
}       
drawBall(); // Start the animation
