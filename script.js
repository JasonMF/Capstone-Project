var i = 0;
var txt = 'Welcome to Simplicity.';
var speed = 60;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("txt").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}